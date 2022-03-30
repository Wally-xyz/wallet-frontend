import * as React from "react";
import styled from "styled-components";

import { QRCodeScanner } from "../../QRCodeScanner";

const Container = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  width: 100%;
`;

const Footer = styled.div`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  font-size: 28px;
  font-weight: 600;
  height: 100px;
  justify-content: center;
  text-align: center;
`;

const Scanner = styled(QRCodeScanner)`
  height: calc(100% - 100px);
  width: 100%;
`;

enum State {
  Checking,
  Success,
  Failure,
}

interface Props {
  onComplete(url: string): void;
}

export function ScanCode(props: Props) {
  const [state, setState] = React.useState<State>(State.Checking);

  return (
    <Container>
      <Scanner
        validator={() => true}
        onSuccess={url => {
          setState(State.Success);
          setTimeout(() => props.onComplete(url), 2000);
        }}
        onFailure={() => {
          setState(State.Failure);
          setTimeout(() => setState(State.Checking), 2000);
        }}
      />
      <Footer>
        {state === State.Success
          ? "✅ Got it!"
          : state === State.Checking
          ? "💡 Tip: Hold the phone close to the camera, then slowly move it back towards you."
          : "Hmm, that doesn't look correct"}
      </Footer>
    </Container>
  );
}
