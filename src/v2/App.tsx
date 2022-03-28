import * as React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";

const GradientCircle1 = styled.div`
  background: linear-gradient(90.87deg, rgba(40, 0, 71, 0.7) -41.78%, rgba(64, 0, 57, 0.7) 100%);
  border-radius: 836px;
  filter: blur(300px);
  height: 836px;
  opacity: 0.8;
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
  position: fixed;
  transform: translateX(-50%) translateY(50%);
  width: 836px;
`;

export function App() {
  return (
    <>
      <GradientCircle1 />
      <GradientCircle2 />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/steps/1" element={<Step1 />} />
        <Route path="/steps/2" element={<Step2 />} />
      </Routes>
    </>
  );
}
