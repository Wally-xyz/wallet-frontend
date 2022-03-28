import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Start } from "./components/screens/Start";
import { EnterEmail } from "./components/screens/EnterEmail";
import { EnterCode } from "./components/screens/EnterCode";
import { UploadImage } from "./components/screens/UploadImage";
import { Purchase } from "./components/screens/Purchase";
import { API_URL } from "../constants/default";

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

interface State {
  account: string;
  authToken: string;
  code: string;
  email: string;
  image?: File;
  imageUrl?: string;
  name: string;
}

export function App() {
  const [state, setState] = React.useState<State>({
    account: "",
    authToken: "",
    code: "",
    email: "",
    image: undefined,
    imageUrl: undefined,
    name: "",
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
            'account': response.data,
          })
        })
        .catch(error => console.log(error))
    }

    if (authToken) {
      setState({ ...state, authToken })
      fetchWallets();
    }
  };

  React.useEffect(init, [])

  return (
    <>
      <GradientCircle1 />
      <GradientCircle2 />
      <Routes>
        <Route path="/" element={<Start />} />
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
              onSubmit={({ account, authToken }) => {
                setState(state => ({ ...state, account, authToken }));
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
        <Route
          path="/purchase"
          element={
            <Purchase
              imageUrl={state.imageUrl || ""}
              name={state.name}
              onSubmit={async () => {
                const resp = await fetch(`${API_URL}/payments/checkoutsession`, {
                  method: "POST",
                  headers: { Authorization: `Bearer ${state.authToken}` },
                }).then(r => r.json());

                const stripeCheckoutUrl = resp.checkout_session;
                window.location.href = stripeCheckoutUrl;
              }}
            />
          }
        />
      </Routes>
    </>
  );
}
