import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { Step4 } from "./components/Step4";

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

  return (
    <>
      <GradientCircle1 />
      <GradientCircle2 />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/steps/1" element={<Step1 />} />
        <Route
          path="/steps/2"
          element={
            <Step2
              email={state.email}
              onEmailChange={email => setState(state => ({ ...state, email }))}
              onSubmit={() => console.log(state)}
            />
          }
        />
        <Route
          path="/steps/3"
          element={
            <Step3
              email={state.email}
              code={state.code}
              onCodeChange={code => setState(state => ({ ...state, code }))}
              onSubmit={() => console.log(state)}
              setAccount={account => setState(state => ({ ...state, account }))}
              setAuthToken={authToken => setState(state => ({ ...state, authToken }))}
            />
          }
        />
        <Route
          path="/steps/4"
          element={
            <Step4
              image={state.image}
              imageUrl={state.imageUrl}
              name={state.name}
              onImageChange={image =>
                setState(state => ({ ...state, image, imageUrl: URL.createObjectURL(image) }))
              }
              onNameChange={name => setState(state => ({ ...state, name }))}
            />
          }
        />
      </Routes>
    </>
  );
}
