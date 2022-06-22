import * as React from "react";

import { TopNav } from "../../TopNav";
import { Illustration } from "./Illustration";

import {
  Container,
  TitleWrapper,
  Footer,
  SubTitle,
  Title,
  Wrapper,
  BackButton,
  StartDemoButton,
} from "./styles";

export function HowItWorks() {
  return (
    <Container>
      <Wrapper>
        <TopNav />
        <TitleWrapper>
          <Title>How It Works</Title>
          <SubTitle>
            Wally is an API that makes it easy to integrate crypto wallets and transactions into
            your application.
          </SubTitle>
        </TitleWrapper>
        <Illustration />
        <Footer>
          <BackButton to="/">Go Back</BackButton>
          <StartDemoButton>Start EasyMint Demo</StartDemoButton>
        </Footer>
      </Wrapper>
    </Container>
  );
}
