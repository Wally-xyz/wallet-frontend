import * as React from "react";
import styled from "styled-components";
import WalletConnect from "@walletconnect/client";
import { SActions, SActionsColumn } from './components/Actions';
import Button, { SSButton as SButton } from "./components/Button";
import Card from "./components/Card";
import { SSInput as SInput } from "./components/Input";
import Header from "./components/Header";
import Column from "./components/Column";
import PeerMeta from "./components/PeerMeta";
import RequestDisplay from "./components/RequestDisplay";
import RequestButton from "./components/RequestButton";
import AccountDetails from "./components/AccountDetails";
import QRCodeScanner, { IQRCodeValidateResponse } from "./components/QRCodeScanner";
import { DEFAULT_CHAIN_ID, DEFAULT_ACTIVE_INDEX, API_URL } from "./constants/default";
import { getCachedSession } from "./helpers/utilities";
import { getAppControllers } from "./controllers";
import { getAppConfig } from "./config";
import Email from "./components/Email";
import Upload from "./components/Upload";
import Mint from "./components/Mint";
import Checkout from "./components/Checkout";
import Twitter from "./components/Twitter";
import Success from "./components/Success";

const SContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
`;

const SVersionNumber = styled.div`
  position: absolute;
  font-size: 12px;
  bottom: 6%;
  right: 0;
  opacity: 0.3;
  transform: rotate(-90deg);
`;

const SContent = styled.div`
  width: 100%;
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SLogo = styled.div`
  padding: 10px 0;
  display: flex;
  height: 100px;
  max-height: 100px;
  & img {
    width: 100%;
  }
`;

const SConnectedPeer = styled.div`
  display: flex;
  align-items: center;
  & img {
    width: 40px;
    height: 40px;
  }
  & > div {
    margin-left: 10px;
  }
`;

const SRequestButton = styled(RequestButton)`
  margin-bottom: 10px;
`;

export interface IAppState {
  loading: boolean;
  scanner: boolean;
  connector: WalletConnect | null;
  uri: string;
  peerMeta: {
    description: string;
    url: string;
    icons: string[];
    name: string;
    ssl: boolean;
  };
  connected: boolean;
  chainId: number;
  accounts: string[];
  activeIndex: number;
  address: string;
  email: string;
  code: string;
  authToken: string;
  requests: any[];
  results: any[];
  payload: any;
  step: number;
}

export const DEFAULT_ACCOUNTS = getAppControllers().wallet.getAccounts();
export const DEFAULT_ADDRESS = DEFAULT_ACCOUNTS[DEFAULT_ACTIVE_INDEX];

export const INITIAL_STATE: IAppState = {
  loading: false,
  scanner: false,
  connector: null,
  uri: "",
  peerMeta: {
    description: "",
    url: "",
    icons: [],
    name: "",
    ssl: false,
  },
  connected: false,
  chainId: getAppConfig().chainId || DEFAULT_CHAIN_ID,
  accounts: DEFAULT_ACCOUNTS,
  address: DEFAULT_ADDRESS,
  email: "",
  code: "",
  authToken: "",
  activeIndex: DEFAULT_ACTIVE_INDEX,
  requests: [],
  results: [],
  payload: null,
  step: 0,
};

class App extends React.Component<{}> {
  public state: IAppState;
  public fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };

    this.fileInput = React.createRef();
  }
  public componentDidMount() {
    this.init();
  }

  public init = async () => {
    let { activeIndex, chainId } = this.state;

    const session = getCachedSession();

    const getQueryVariable: (variable:string) => string | null = (variable:string) => {
      const query = window.location.search.substring(1);
      const vars = query.split('&');
      for (let i = 0; i < vars.length; i++) {
          const pair = vars[i].split('=');
          if (decodeURIComponent(pair[0]) === variable) {
              return decodeURIComponent(pair[1]);
          }
      }
      return null
    }
    if (getQueryVariable('success') === 'True' || getQueryVariable('success') === 'true') {
      this.setState({ 'step': 3})
    }
    const step = getQueryVariable('step')
    if (step) {
      this.setState({ 'step': parseInt(step, 10) })
    }
    const authToken = window.localStorage.getItem('token')

    if (authToken) {
      this.setState({ authToken })
      await fetch(`${API_URL}/tokens/wallet?access_token=${authToken}`, {
          headers: {
              'Authorization': `Bearer ${authToken}`
          }
      }).then(response => {
        if (!response.ok) {
          this.setState({
            'step': 0,
          })
          throw new Error('Network response was not OK');
        }
        return response.json()
      })
      .then(response => {
        this.setState({
          'accounts': [response.data],
          'address': response.data,
        })
      })
      .catch(error => console.log(error))
    }

    if (!session) {
      await getAppControllers().wallet.init(activeIndex, chainId);
    } else {
      const connector = new WalletConnect({ session });

      const { connected, accounts, peerMeta } = connector;

      const address = accounts[0];

      activeIndex = accounts.indexOf(address);
      chainId = connector.chainId;

      await getAppControllers().wallet.init(activeIndex, chainId);

      await this.setState({
        connected,
        connector,
        address,
        activeIndex,
        accounts,
        chainId,
        peerMeta,
      });

      this.subscribeToEvents();
    }
    await getAppConfig().events.init(this.state, this.bindedSetState);
  };

  public bindedSetState = (newState: Partial<IAppState>) => this.setState(newState);

  public initWalletConnect = async () => {
    const { uri } = this.state;

    this.setState({ loading: true });

    try {
      const connector = new WalletConnect({ uri });

      if (!connector.connected) {
        await connector.createSession();
      }

      await this.setState({
        loading: false,
        connector,
        uri: connector.uri,
      });

      this.subscribeToEvents();
    } catch (error) {
      this.setState({ loading: false });

      throw error;
    }
  };

  public approveSession = () => {
    console.log("ACTION", "approveSession");
    const { connector, chainId, address } = this.state;
    if (connector) {
      connector.approveSession({ chainId, accounts: [address] });
    }
    this.setState({ connector });
  };

  public rejectSession = () => {
    console.log("ACTION", "rejectSession");
    const { connector } = this.state;
    if (connector) {
      connector.rejectSession();
    }
    this.setState({ connector });
  };

  public killSession = () => {
    console.log("ACTION", "killSession");
    const { connector } = this.state;
    if (connector) {
      connector.killSession();
    }
    this.resetApp();
  };

  public resetApp = async () => {
    await this.setState({ ...INITIAL_STATE });
    this.init();
  };

  public subscribeToEvents = () => {
    console.log("ACTION", "subscribeToEvents");
    const { connector } = this.state;

    if (connector) {
      connector.on("session_request", (error, payload) => {
        console.log("EVENT", "session_request");

        if (error) {
          throw error;
        }
        console.log("SESSION_REQUEST", payload.params);
        const { peerMeta } = payload.params[0];
        this.setState({ peerMeta });
        this.approveSession();
      });

      connector.on("session_update", error => {
        console.log("EVENT", "session_update");

        if (error) {
          throw error;
        }
      });

      connector.on("call_request", async (error, payload) => {
        // tslint:disable-next-line
        console.log("EVENT", "call_request", "method", payload.method);
        console.log("EVENT", "call_request", "params", payload.params);

        if (error) {
          throw error;
        }

        this.approveRequest(payload);

        await getAppConfig().rpcEngine.router(payload, this.state, this.bindedSetState);
      });

      connector.on("connect", (error, payload) => {
        console.log("EVENT", "connect");

        if (error) {
          throw error;
        }

        this.setState({ connected: true });
      });

      connector.on("disconnect", (error, payload) => {
        console.log("EVENT", "disconnect");

        if (error) {
          throw error;
        }
      });

      if (connector.connected) {
        const { chainId, accounts } = connector;
        const index = 0;
        const address = accounts[index];
        getAppControllers().wallet.update(index, chainId);
        this.setState({
          connected: true,
          address,
          chainId,
        });
      }

      this.setState({ connector });
    }
  };

  public updateSession = async (sessionParams: { chainId?: number; activeIndex?: number }) => {
    const { connector, chainId, accounts, activeIndex } = this.state;
    const newChainId = sessionParams.chainId || chainId;
    const newActiveIndex = sessionParams.activeIndex || activeIndex;
    const address = accounts[newActiveIndex];
    if (connector) {
      connector.updateSession({
        chainId: newChainId,
        accounts: [address],
      });
    }
    await this.setState({
      connector,
      address,
      accounts,
      activeIndex: newActiveIndex,
      chainId: newChainId,
    });
    await getAppControllers().wallet.update(newActiveIndex, newChainId);
    await getAppConfig().events.update(this.state, this.bindedSetState);
  };

  public updateChain = async (chainId: number | string) => {
    await this.updateSession({ chainId: Number(chainId) });
  };

  public updateAddress = async (activeIndex: number) => {
    await this.updateSession({ activeIndex });
  };

  public toggleScanner = () => {
    console.log("ACTION", "toggleScanner");
    this.setState({ scanner: !this.state.scanner });
  };

  public onQRCodeValidate = (data: string): IQRCodeValidateResponse => {
    const res: IQRCodeValidateResponse = {
      error: null,
      result: null,
    };
    try {
      res.result = data;
    } catch (error) {
      res.error = error;
    }

    return res;
  };

  public onQRCodeScan = async (data: any) => {
    const uri = typeof data === "string" ? data : "";
    if (uri) {
      console.log('SCANNED', uri)
      await this.setState({ uri });
      await this.initWalletConnect();
      this.toggleScanner();
    }
  };

  public onURIPaste = async (e: any) => {
    console.log('URI Pasted')
    const data = e.target.value;
    const uri = typeof data === "string" ? data : "";
    if (uri) {
      await this.setState({ uri });
      await this.initWalletConnect();
    }
  };

  public onQRCodeError = (error: Error) => {
    throw error;
  };

  public onQRCodeClose = () => this.toggleScanner();

  public openRequest = async (request: any) => {
    const payload = Object.assign({}, request);

    const params = payload.params[0];
    if (request.method === "eth_sendTransaction") {
      payload.params[0] = await getAppControllers().wallet.populateTransaction(params);
    }

    this.setState({
      payload,
    });
  };

  public closeRequest = async (payload:any) => {
    const { requests } = this.state;
    const filteredRequests = requests.filter(request => request.id !== payload.id);
    await this.setState({
      requests: filteredRequests,
      payload: null,
    });
  };

  public approveRequest = async (payload: any) => {
    const { connector } = this.state;

    try {
      await getAppConfig().rpcEngine.signer(payload, this.state, this.bindedSetState);
    } catch (error) {
      console.error(error);
      if (connector) {
        connector.rejectRequest({
          id: payload.id,
          error: { message: "Failed or Rejected Request" },
        });
      }
    }

    this.closeRequest(payload);
    await this.setState({ connector });
  };

  public rejectRequest = async () => {
    const { connector, payload } = this.state;
    if (connector) {
      connector.rejectRequest({
        id: payload.id,
        error: { message: "Failed or Rejected Request" },
      });
    }
    await this.closeRequest(payload);
    await this.setState({ connector });
  };

  public setAuthToken = (authToken: string) => {
    this.setState({ authToken })
    const ls = window.localStorage;
    ls.setItem('token', authToken);
  }

  public render() {
    const {
      peerMeta,
      scanner,
      connected,
      activeIndex,
      accounts,
      address,
      chainId,
      requests,
      payload,
    } = this.state;
    return (
      <React.Fragment>
        <SContainer>
          <Header
            connected={connected}
            address={address}
            chainId={chainId}
            killSession={this.killSession}
          />
          <SContent>
            <Card maxWidth={400}>
              <SLogo>
                <img src={getAppConfig().logo} alt={getAppConfig().name} />
              </SLogo>
              {!connected ? (
                peerMeta && peerMeta.name ? (
                  <Column>
                    <PeerMeta peerMeta={peerMeta} />
                    <SActions>
                      <Button onClick={this.approveSession}>{`Approve`}</Button>
                      <Button onClick={this.rejectSession}>{`Reject`}</Button>
                    </SActions>
                  </Column>
                ) : (
                  <Column>
                    {this.state.step === 0 ?
                      <Email
                        setAuthToken={this.setAuthToken}
                        setAccounts={(accounts, address) => this.setState({
                          accounts,
                          address,
                          'step': 1,
                        })}
                      /> : <></>
                    }
                    {this.state.step === 1 ?
                      <Upload
                        authToken={this.state.authToken}
                        onComplete={() => this.setState({'step': this.state.step+1})}
                      /> : <></>
                    }
                    {this.state.step === 2 ?
                      <Checkout
                        authToken={this.state.authToken}
                        onComplete={() => this.setState({'step': this.state.step+1})}
                      /> : <></>
                    }
                    { this.state.step === 3 ?
                      <Mint
                        authToken={this.state.authToken}
                        onComplete={() => this.setState({'step': this.state.step+1})}
                      /> : <></>
                    }
                    { this.state.step === 4 ?
                      <Success
                        authToken={this.state.authToken}
                        onComplete={() => this.setState({'step': this.state.step+1})}
                      /> : <></>
                    }
                    { this.state.step === 5 ?
                      <Twitter
                        authToken={this.state.authToken}
                        onComplete={() => this.setState({'step': this.state.step+1})}
                      /> : <></>
                    }
                    {
                      this.state.step === 6
                        ? <>
                          <AccountDetails
                            chains={getAppConfig().chains}
                            address={address}
                            activeIndex={activeIndex}
                            chainId={chainId}
                            accounts={accounts}
                            updateAddress={this.updateAddress}
                            updateChain={this.updateChain}
                          />
                          <SActionsColumn>
                            <SButton onClick={this.toggleScanner}>{`Scan`}</SButton>
                            {getAppConfig().styleOpts.showPasteUri && (
                              <>
                                <p>{"OR"}</p>
                                <SInput onChange={this.onURIPaste} placeholder={"Paste link"} />
                              </>
                            )}
                          </SActionsColumn>
                        </>
                    : <></>}
                  </Column>
                )
              ) : !payload ? (
                <Column>
                  <AccountDetails
                    chains={getAppConfig().chains}
                    address={address}
                    activeIndex={activeIndex}
                    chainId={chainId}
                    accounts={accounts}
                    updateAddress={this.updateAddress}
                    updateChain={this.updateChain}
                  />
                  {peerMeta && peerMeta.name && (
                    <>
                      <h6>{"Connected to"}</h6>
                      <SConnectedPeer>
                        <img src={peerMeta.icons[0]} alt={peerMeta.name} />
                        <div>{peerMeta.name}</div>
                      </SConnectedPeer>
                    </>
                  )}
                  <h6>{"Pending Call Requests"}</h6>
                  {requests.length ? (
                    requests.map(request => (
                      <SRequestButton key={request.id} onClick={() => this.openRequest(request)}>
                        <div>{request.method}</div>
                      </SRequestButton>
                    ))
                  ) : (
                    <div>
                      <div>{"No pending requests"}</div>
                    </div>
                  )}
                </Column>
              ) : (
                <RequestDisplay
                  payload={payload}
                  peerMeta={peerMeta}
                  renderPayload={(payload: any) => getAppConfig().rpcEngine.render(payload)}
                  approveRequest={() => this.approveRequest(this.state.payload)}
                  rejectRequest={this.rejectRequest}
                />
              )}
            </Card>
          </SContent>
          {scanner && (
            <QRCodeScanner
              onValidate={this.onQRCodeValidate}
              onScan={this.onQRCodeScan}
              onError={this.onQRCodeError}
              onClose={this.onQRCodeClose}
            />
          )}
        </SContainer>
        {getAppConfig().styleOpts.showVersion && (
          <SVersionNumber>{`v${process.env.REACT_APP_VERSION}`} </SVersionNumber>
        )}
      </React.Fragment>
    );
  }
}

export default App;
