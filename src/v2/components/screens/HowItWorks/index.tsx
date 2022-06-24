import * as React from "react";

import { TopNav } from "../../TopNav";
import { Illustration } from "./Illustration";

import {
  Container,
  TitleWrapper,
  Footer,
  SubTitle,
  Title,
  BackButton,
  StartDemoButton,
} from "./styles";

export function HowItWorks() {
  return (
    <Container>
      <div>
        <TopNav />
        <TitleWrapper>
          <Title>How It Works</Title>
          <SubTitle>
            Wally is an API that makes it easy to integrate crypto wallets and transactions into
            your application.
          </SubTitle>
        </TitleWrapper>
      </div>
      <Illustration />
      <Footer>
        <BackButton to="/">Go Back</BackButton>
        <StartDemoButton>Start EasyMint Demo</StartDemoButton>
      </Footer>
    </Container>
  );
}
