import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import WalletConnect from "@walletconnect/client";

import { Start } from "./components/screens/Start";
import { EnterEmail } from "./components/screens/EnterEmail";
import { EnterCode } from "./components/screens/EnterCode";
import { UploadImage } from "./components/screens/UploadImage";
import { API_URL } from "../constants/default";
import { getAppConfig } from "../config";

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
  name: string;
  peerMeta: {
    description: string;
    url: string;
    icons: string[];
    name: string;
    ssl: boolean;
  };
  requests: any[];
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
    peerMeta: {
      description: "",
      url: "",
      icons: [],
      name: "",
      ssl: false,
    },
    requests: [],
    uri: undefined,
  });

  const navigate = useNavigate();

  const init = () => {
    const authToken = window.localStorage.getItem('token')

    const fetchWallets = async () => {
      await fetch(`${API_URL}/tokens/wallet?access_token=${authToken}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not OK');
          }
          return response.json()
        })
        .then(response => {
          setState({
            ...state,
            'address': response.data,
          })
        })
        .catch(error => console.log(error))
    }

    if (authToken) {
      setState({ ...state, authToken })
      fetchWallets();
    }
  };

  const initWalletConnect = async () => {
    const { uri } = state;

    setState({ ...state, loading: true });

    try {
      const connector = new WalletConnect({ uri });

      if (!connector.connected) {
        await connector.createSession();
      }

      await setState({
        ...state,
        loading: false,
        connector,
        uri: connector.uri,
      });

      subscribeToEvents();
    } catch (error) {
      setState({ ...state, loading: false });

      throw error;
    }
  };

  const subscribeToEvents = () => {
    console.log("ACTION", "subscribeToEvents");
    const { connector } = state;

    if (connector) {
      connector.on("session_request", (error, payload) => {
        console.log("EVENT", "session_request");

        if (error) {
          throw error;
        }
        console.log("SESSION_REQUEST", payload.params);
        const { peerMeta } = payload.params[0];
        setState({ ...state, peerMeta });
        approveSession();
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

        setState({ ...state, connected: true });
      });

      connector.on("disconnect", (error, payload) => {
        console.log("EVENT", "disconnect");

        if (error) {
          throw error;
        }
      });

      setState({ ...state, connector });
    }
  };

  const bindedSetState = (newState: Partial<State>) => setState( {...state, ...newState});

  const approveSession = () => {
    console.log("ACTION", "approveSession");
    const { connector, address } = state;
    if (connector) {
      connector.approveSession({ chainId: getAppConfig().chainId, accounts: [address] });
    }
    setState({ ...state, connector });
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

    closeRequest(payload)
    await setState({ ...state, connector });
  };

  const closeRequest = async (payload:any) => {
    const { requests } = state;
    const filteredRequests = requests.filter(request => request.id !== payload.id);
    await setState({
      ...state,
      requests: filteredRequests,
    });
  };

  React.useEffect(init, [])

  return (
    <>
      <GradientCircle1 />
      <GradientCircle2 />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/dummy" element={<button onClick={initWalletConnect}/>} />
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
            <EnterCode
              code={state.code}
              email={state.email}
              onCodeChange={code => setState(state => ({ ...state, code }))}
              onSubmit={({ address, authToken }) => {
                setState(state => ({ ...state, address, authToken }));
                navigate("/upload-image");
              }}
            />
          }
        />
        <Route
          path="/upload-image"
          element={
            <UploadImage
              image={state.image}
              imageUrl={state.imageUrl}
              name={state.name}
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

                await fetch(`${API_URL}/media/upload?name=${state.name}`, {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${state.authToken}`,
                  },
                  body: data,
                });

                navigate("/purchase");
              }}
            />
          }
        />
      </Routes>
    </>
  );
}
