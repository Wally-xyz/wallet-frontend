import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { PressAndHoldButton } from "../../PressAndHoldButton";

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

const Image = styled.div`
  background-color: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100px;
  height: 400px;
  margin-top: 16px;
  width: 400px;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  margin-top: 56px;
`;

const Star1 = styled.div`
  font-size: 50px;
  left 0;
  position: absolute;
  top: 0;
  transform: translateX(-120px) translateY(-60px);
`;

const Star2 = styled.div`
  bottom: 0;
  font-size: 50px;
  position: absolute;
  right 0;
  transform: translateX(70px) translateY(5px);
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

interface Props {
  imageUrl: string;
  name: string;
  onMint(): void;
}

export function Mint(props: Props) {
  const [minting, setMinting] = React.useState(false);

  return (
    <Chrome>
      <Container>
        <Title>
          {minting
            ? "⏳ Waiting for the minting fairies to finish... "
            : "🔨 Everything looks good. You’re ready to mint!"}
        </Title>
        <Name>{props.name}</Name>
        <Image style={{ backgroundImage: `url(${props.imageUrl})` }} />
        <Footer>
          <PressAndHoldButton
            onComplete={() => {
              setMinting(true);
              props.onMint();
            }}
          >
            {minting ? "Minting..." : "Mint"}
          </PressAndHoldButton>
          {!minting && (
            <>
              <Star1>✨</Star1>
              <Star2>✨</Star2>
            </>
          )}
        </Footer>
      </Container>
    </Chrome>
  );
}
