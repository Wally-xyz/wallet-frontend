import * as React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import WalletConnect from "@walletconnect/client";

import { StripeContextProvider } from "src/context/stripe";

import { CollectUsername } from "./components/screens/CollectUsername";
import { Complete } from "./components/screens/Complete";
import { ConnectTwitter } from "./components/screens/ConnectTwitter";
import { EnterEmail } from "./components/screens/EnterEmail";
import { Mint } from "./components/screens/Mint";
import { MintComplete } from "./components/screens/MintComplete";
import { Purchase } from "./components/screens/Purchase";
import { Start } from "./components/screens/Start";
import { UploadImage } from "./components/screens/UploadImage";
import { API_URL } from "../constants/default";
import { getAppConfig } from "../config";
import { HowItWorks } from "./components/screens/HowItWorks";
import { SelectImage } from "./components/screens/SelectImage";
import { PurchaseSuccess } from "./components/screens/PurchaseSuccess";
import { MissionAccomplished } from "./components/screens/MissionAccomplished";

const GradientCircle1 = styled.div`
  background: linear-gradient(90.87deg, rgba(40, 0, 71, 0.7) -41.78%, rgba(64, 0, 57, 0.7) 100%);
  border-radius: 836px;
  filter: blur(300px);
  height: 836px;
  opacity: 0.8;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(70%) translateY(-70%);
  width: 836px;
  z-index: -1;
`;

const GradientCircle2 = styled.div`
  background: linear-gradient(90.87deg, rgba(40, 0, 71, 0.7) -41.78%, rgba(64, 0, 57, 0.7) 100%);
  border-radius: 836px;
  bottom: 0;
  filter: blur(300px);
  height: 836px;
  left: 0;
  pointer-events: none;
  position: fixed;
  transform: translateX(-50%) translateY(50%);
  width: 836px;
  z-index: -1;
`;

export interface State {
  address: string;
  activeIndex: number;
  authToken: string;
  chainId: number;
  code: string;
  connected: boolean;
  connector?: WalletConnect;
  email: string;
  image?: File;
  imageUrl?: string;
  loading: boolean;
  openseaUrl: string;
  name: string;
  peerMeta: {
    description: string;
    url: string;
    icons: string[];
    name: string;
    ssl: boolean;
  };
  requests: any[];
  twitterUsername: string;
  uri?: string;
}

export function App() {
  const [state, setState] = React.useState<State>({
    address: "",
    activeIndex: 0,
    authToken: "",
    chainId: getAppConfig().chainId,
    code: "",
    connected: false,
    connector: undefined,
    email: "",
    image: undefined,
    imageUrl: undefined,
    loading: false,
    name: "",
    openseaUrl: "",
    peerMeta: {
      description: "",
      url: "",
      icons: [],
      name: "",
      ssl: false,
    },
    requests: [],
    twitterUsername: "",
    uri: undefined,
  });

  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [mintingTx, setMintingTx] = React.useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const fetchImage = async (authToken: string) => {
    const resp = await fetch(`${API_URL}/media/recent`, {
      headers: { Authorization: `Bearer ${authToken}` },
    }).then(r => r.json());

    setState(state => ({
      ...state,
      openseaUrl: resp.opensea_url,
      imageUrl: resp.s3_url,
      name: resp.name,
    }));
  };

  const init = () => {
    const authToken = window.localStorage.getItem("token");
    const path = location.pathname;

    const fetchWallets = async () => {
      await fetch(`${API_URL}/tokens/wallet?access_token=${authToken}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then(response => {
          if (!response.ok) {
            if (path !== "/enter-email" && path !== "/enter-code") {
              navigate("/");
            }
            throw new Error("Network response was not OK");
          }
          return response.json();
        })
        .then(response => {
          setState(state => ({ ...state, address: response.data }));
        })
        .catch(error => console.log(error));
    };

    if (authToken) {
      setState(state => ({ ...state, authToken }));
      fetchWallets();
      fetchImage(authToken);
    }
  };

  const initWalletConnect = async (uri: string) => {
    if (!uri) {
      return;
    }
    setState(state => ({ ...state, uri, loading: true }));

    try {
      const connector = new WalletConnect({ uri });

      if (!connector.connected) {
        await connector.createSession();
      }

      await setState(state => ({
        ...state,
        loading: false,
        connector,
        // uri: connector.uri,
      }));
    } catch (error) {
      setState(state => ({ ...state, loading: false }));

      throw error;
    }
  };

  const subscribeToEvents = () => {
    const { connector } = state;
    if (connector) {
      console.log("ACTION", "subscribeToEvents");
      navigate("/mission-accomplished");
      connector.on("session_request", (error, payload) => {
        console.log("EVENT", "session_request");

        if (error) {
          throw error;
        }
        console.log("SESSION_REQUEST", payload.params);
        const { peerMeta } = payload.params[0];
        setState(state => ({ ...state, peerMeta }));
        approveSession();
        navigate("/mission-accomplished");
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

        approveRequest(payload);

        await getAppConfig().rpcEngine.router(payload, state, bindedSetState);
      });

      connector.on("connect", (error, payload) => {
        console.log("EVENT", "connect");

        if (error) {
          throw error;
        }

        setState(state => ({ ...state, connected: true }));
      });

      connector.on("disconnect", (error, payload) => {
        console.log("EVENT", "disconnect");

        if (error) {
          throw error;
        }
      });

      setState(state => ({ ...state, connector }));
    }
  };

  const bindedSetState = (newState: Partial<State>) =>
    setState(state => ({ ...state, ...newState }));

  const approveSession = () => {
    console.log("ACTION", "approveSession");
    const { connector, address } = state;
    if (connector) {
      connector.approveSession({ chainId: getAppConfig().chainId, accounts: [address] });
    }
    setState(state => ({ ...state, connector }));
  };

  const approveRequest = async (payload: any) => {
    const { connector } = state;

    try {
      await getAppConfig().rpcEngine.signer(payload, state, bindedSetState);
    } catch (error) {
      console.error(error);
      if (connector) {
        connector.rejectRequest({
          id: payload.id,
          error: { message: "Failed or Rejected Request" },
        });
      }
    }

    closeRequest(payload);
    await setState(state => ({ ...state, connector }));
  };

  const closeRequest = async (payload: any) => {
    const { requests } = state;
    const filteredRequests = requests.filter(request => request.id !== payload.id);
    await setState(state => ({
      ...state,
      requests: filteredRequests,
    }));
  };

  React.useEffect(init, []);

  React.useEffect(() => {
    if (state.uri) {
      initWalletConnect(state.uri);
    }
  }, [state.uri]);

  React.useEffect(() => {
    if (state.connector) {
      subscribeToEvents();
    }
  }, [state.connector]);

  React.useEffect(() => {
    if (location.pathname === "/mint-complete" && state.authToken) {
      fetchImage(state.authToken);
    }
  }, [location]);

  return (
    <StripeContextProvider authToken={state.authToken}>
      <>
        <GradientCircle1 />
        <GradientCircle2 />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/select-image"
            element={
              <SelectImage
                address={state.address}
                image={state.image}
                imageUrl={state.imageUrl}
                name={state.name}
                uploading={uploadingImage}
                onImageChange={image =>
                  setState(state => ({ ...state, image, imageUrl: URL.createObjectURL(image) }))
                }
                onNameChange={name => setState(state => ({ ...state, name }))}
                onSubmit={async () => {
                  if (!(state.image && state.name)) {
                    return;
                  }

                  const data = new FormData();
                  data.append("upload_file", state.image);
                  setUploadingImage(true);

                  await fetch(`${API_URL}/media/upload?name=${state.name}`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${state.authToken}`,
                    },
                    body: data,
                  });

                  setUploadingImage(false);
                  navigate("/purchase");
                }}
              />
            }
          />
          <Route
            path="/dummy"
            element={<button onClick={() => initWalletConnect(state.uri || "")} />}
          />
          <Route
            path="/enter-email"
            element={
              <EnterEmail
                email={state.email}
                onEmailChange={email => setState(state => ({ ...state, email }))}
                onSubmit={() => navigate("/enter-code")}
              />
            }
          />
          <Route
            path="/enter-code"
            element={
              <EnterEmail
                code={state.code}
                email={state.email}
                onEmailChange={email => setState(state => ({ ...state, email }))}
                onCodeChange={code => setState(state => ({ ...state, code }))}
                onCodeSubmit={({ address, authToken }) => {
                  setState(state => ({ ...state, address, authToken }));
                  window.localStorage.setItem("token", authToken);
                  navigate("/select-image");
                }}
              />
            }
          />
          <Route
            path="/upload-image"
            element={
              <UploadImage
                address={state.address}
                image={state.image}
                imageUrl={state.imageUrl}
                name={state.name}
                uploading={uploadingImage}
                onImageChange={image =>
                  setState(state => ({ ...state, image, imageUrl: URL.createObjectURL(image) }))
                }
                onNameChange={name => setState(state => ({ ...state, name }))}
                onSubmit={async () => {
                  if (!(state.image && state.name)) {
                    return;
                  }

                  const data = new FormData();
                  data.append("upload_file", state.image);
                  setUploadingImage(true);

                  await fetch(`${API_URL}/media/upload?name=${state.name}`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${state.authToken}`,
                    },
                    body: data,
                  });

                  setUploadingImage(false);
                  navigate("/purchase");
                }}
              />
            }
          />
          <Route path="/purchase" element={<Purchase />} />
          <Route
            path="/purchase-success"
            element={<PurchaseSuccess imageUrl={state.imageUrl || ""} />}
          />
          <Route
            path="/mint"
            element={
              <Mint
                imageUrl={state.imageUrl || ""}
                name={state.name}
                tx={mintingTx}
                onMint={async () => {
                  const resp = await fetch(`${API_URL}/mint/mint`, {
                    method: "POST",
                    headers: { Authorization: `Bearer ${state.authToken}` },
                  }).then(r => r.json());

                  setMintingTx(resp.hash);
                  setTimeout(() => navigate("/mint-complete"), 10000);
                }}
              />
            }
          />
          <Route
            path="/mint-complete"
            element={
              <MintComplete
                imageUrl={state.imageUrl || ""}
                name={state.name}
                onNext={() => navigate("/username")}
                openseaUrl={state.openseaUrl}
              />
            }
          />
          <Route
            path="/username"
            element={
              <CollectUsername
                username={state.twitterUsername}
                onUsernameChange={twitterUsername =>
                  setState(state => ({ ...state, twitterUsername }))
                }
                onSubmit={() => navigate("/connect-twitter")}
              />
            }
          />
          <Route
            path="/connect-twitter"
            element={
              <ConnectTwitter
                onContinue={uri => {
                  setState(state => ({ ...state, uri }));
                }}
              />
            }
          />
          <Route
            path="/mission-accomplished"
            element={<MissionAccomplished imageUrl={state.imageUrl || ""} />}
          />
          <Route
            path="/complete"
            element={<Complete imageUrl={state.imageUrl || ""} username={state.twitterUsername} />}
          />
        </Routes>
      </>
    </StripeContextProvider>
  );
}
