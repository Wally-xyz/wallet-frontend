import * as React from "react";
import styled from "styled-components";

import { Logo as _Logo } from "../Logo";
import { Whale as _Whale } from "../Whale";
import { GradientLink } from "../buttons/Gradient";

const Logo = styled(_Logo)`
  height: 144px;
`;

const Whale = styled(_Whale)`
  height: 220px;
  width: 240px;
  margin-top: 45px;
`;

const Button = styled(GradientLink)`
  margin-top: 65px;
  position: relative;
`;

const Container = styled.article`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Disclaimer = styled.footer`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  margin-top: 65px;
  padding: 0 20px;
`;

const Message = styled.div`
  font-weight: 400;
  font-size: 26px;
  margin-top: 28px;
  padding: 0 20px;
  text-align: center;
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
  padding: 0 20px;
  text-align: center;
`;

export function Step1() {
  return (
    <Container>
      <Content>
        <Logo />
        <Tagline>
          Wally lets you easily integrate wallets into user accounts through our APIs.
        </Tagline>
        <Message>
          Want to see how easy it is? 🤗
          <br />
          Turn your twitter profile into an NFT within minutes.*
        </Message>
        <Whale />
        <Button to="/steps/2">
          Make an NFT
          <Star1>✨</Star1>
          <Star2>✨</Star2>
        </Button>
        <Disclaimer>*To access this feature you need to be subscribed to Twitter Blue.</Disclaimer>
      </Content>
    </Container>
  );
}
