import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Logo as _Logo } from "../../Logo";
import { Whale as _Whale } from "../../Whale";
import { ButtonLink } from "../../Button";

const Logo = styled(_Logo)`
  height: 144px;
`;

const Whale = styled(_Whale)`
  height: 220px;
  width: 240px;
  margin-top: 45px;
`;

const AlreadyConnected = styled.div`
  color: rgba(255, 255, 255);
  font-size: 20px;
  margin-top: 32px;
`;

const Button = styled(ButtonLink)`
  margin-top: 65px;
  position: relative;
`;

const Center = styled.div`
  align-items: center;
  display: grid;
  gap: 65px;
  grid-template-columns: 1fr max-content;
`;

const ConnectToTwitter = styled(Link)`
  color: #32adf0;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;

const Container = styled.article`
  box-sizing: border-box;
  display: grid;
  place-items: center;
  height: 100%;
  padding: 20px;
`;

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 620px;
`;

const Disclaimer = styled.footer`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-top: 80px;
`;

const Message = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-top: 28px;
`;

const Star1 = styled.div`
  bottom: 100%;
  font-size: 50px;
  position: absolute;
  right: 100%;
  transform: translateX(5px) translateY(25px);
`;

const Star2 = styled.div`
  font-size: 50px;
  left: 100%;
  position: absolute;
  top: 100%;
  transform: translateX(10px) translateY(-45px);
`;

const Tagline = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin-top: 24px;
`;

export function Start() {
  return (
    <Container>
      <Center>
        <Content>
          <Logo />
          <Tagline>
            Wally lets you easily integrate wallets into user accounts through our APIs.
          </Tagline>
          <Message>
            Want to see how easy it is? 🤗 Try our demo!
            <br />
            Turn your twitter profile into an NFT within minutes.*
          </Message>
          <Button to="/enter-email">
            Make an NFT
            <Star1>✨</Star1>
            <Star2>✨</Star2>
          </Button>
          <Disclaimer>
            *To complete the demo you need to be subscribed to Twitter Blue. This process works best
            on your desktop browser.
          </Disclaimer>
        </Content>
        <div>
          <Whale />
          <AlreadyConnected>Already have an NFT with us?</AlreadyConnected>
          <ConnectToTwitter to="/connect-twitter">Connect it to Twitter</ConnectToTwitter>
        </div>
      </Center>
    </Container>
  );
}
