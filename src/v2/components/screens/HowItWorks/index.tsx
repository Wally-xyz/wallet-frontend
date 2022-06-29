import * as React from "react";

import { BackButton } from "../../Styles/BackButton";
import { PrimaryButton } from "../../Styles/Button";
import { Heading1, Heading3 } from "../../Styles/Typography";
import { TopNav } from "../../TopNav";

import { Illustration } from "./Illustration";

import { Container, TitleWrapper, Footer, TopNavWrapper } from "./styles";

export function HowItWorks() {
  return (
    <Container>
      <TopNavWrapper>
        <TopNav />
        <TitleWrapper>
          <Heading1>How It Works</Heading1>
          <Heading3 align="left">
            Wally is an API that makes it easy to integrate crypto wallets and transactions into
            your application.
          </Heading3>
        </TitleWrapper>
      </TopNavWrapper>
      <Illustration />
      <Footer>
        <BackButton />
        <PrimaryButton>Start EasyMint Demo</PrimaryButton>
      </Footer>
    </Container>
  );
}
