import * as React from "react";
import styled, { css, keyframes } from "styled-components";

import { Chrome } from "../../Chrome";
import { PressAndHoldButton } from "../../PressAndHoldButton";

const shake = keyframes`
  0% { transform: translateX(0) }
  12.5% { transform: translateX(var(--shake)) }
  25% { transform: translateX(var(--shake-neg)) }
  37.5% { transform: translateX(var(--shake)) }
  50% { transform: translateX(0) }
  62.5% { transform: translateY(var(--shake)) }
  75% { transform translateY(var(--shake-neg)) }
  87.5% { transform: translateY(var(--shake)) }
  100% { transform: translateY(0) }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: grid;
  place-items: center;
  position: relative;
  margin-top: 56px;
`;

const Image = styled.div<{ distance?: number }>`
  --shake: ${props => props.distance || 0}px;
  ${props =>
    props.distance &&
    css`
      animation: ${shake} 0.1s infinite;
    `}
  background-color: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100px;
  height: 350px;
  margin-top: 16px;
  width: 350px;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  margin-top: 56px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;

const PressAndHoldExplainer = styled.div`
    color: #ffffff;
    margin-top: 16px;
`

interface Props {
  imageUrl: string;
  name: string;
  onMint(): void;
}

export function Mint(props: Props) {
  const [minting, setMinting] = React.useState(false);
  const [shake, setShake] = React.useState(0);
  const timeout = React.useRef<number | null>(null);

  const stopShake = React.useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setShake(() => 0);
  }, [setShake]);

  const startShake = React.useCallback(() => {
    setShake(state => state + 1);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(startShake, 200);
  }, [setShake, stopShake]);

  return (
    <Chrome>
      <Container>
        <Title>
          {minting
            ? "⏳ Waiting for the minting fairies to finish..."
            : "🔨 Everything looks good. You’re ready to mint!"}
        </Title>
        <Name>{props.name}</Name>
        <Image distance={shake} style={{ backgroundImage: `url(${props.imageUrl})` }} />
        <Footer>
          <PressAndHoldButton
            onPointerDown={() => startShake()}
            onPointerUp={() => stopShake()}
            onComplete={() => {
              setMinting(true);
              stopShake();
              props.onMint();
            }}
          >
            {minting ? "Minting..." : "Mint"}
          </PressAndHoldButton>
          <PressAndHoldExplainer>☝️ Press and hold</PressAndHoldExplainer>
        </Footer>
      </Container>
    </Chrome>
  );
}
