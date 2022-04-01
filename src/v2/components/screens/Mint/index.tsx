import * as React from "react";
import styled, { css, keyframes } from "styled-components";

import { Chrome } from "../../Chrome";
import { PressAndHoldButton } from "../../PressAndHoldButton";
import { EasyMinting } from "../../tips/EasyMinting";

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
  box-sizing: border-box;
  max-width: 1200px;
  padding: 40px;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: grid;
  gap: 80px;
  grid-template-columns: 350px 1fr;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Etherscan = styled.a`
  color: rgba(255, 255, 255, 0.5);
  display: block;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;

  strong {
    color: rgba(255, 255, 255, 1);
    text-style: normal;
  }
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

const Left = styled.div`
  position: relative;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  text-align: center;
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
`;

interface Props {
  imageUrl: string;
  name: string;
  tx?: string;
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
    <Chrome footer={<EasyMinting />}>
      <Container>
        <Content>
          <Left>
            <Name>{props.name}</Name>
            <Image distance={shake} style={{ backgroundImage: `url(${props.imageUrl})` }} />
          </Left>
          <div>
            <Title>
              {minting
                ? "⏳ Waiting for the minting fairies to finish..."
                : "🔨 Everything looks good. You’re ready to mint!"}
            </Title>
            {minting && props.tx ? (
              <Etherscan href={`https://etherscan.io/tx/${props.tx}`} target="_blank">
                Wanna get technical? See your NFT status on <strong>etherscan</strong>.
              </Etherscan>
            ) : (
              <Etherscan>&nbsp;</Etherscan>
            )}
            <Footer>
              <PressAndHoldButton
                onPointerDown={() => {
                  startShake();
                }}
                onPointerUp={() => {
                  stopShake();
                }}
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
          </div>
        </Content>
      </Container>
    </Chrome>
  );
}
