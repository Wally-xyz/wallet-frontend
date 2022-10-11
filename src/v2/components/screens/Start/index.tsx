import * as React from "react";

import { Logo } from "src/v2/icons/Logo";
import { EasyMintLogo } from "../../EasyMintLogo";
import { TopNav } from "../../TopNav";

import {
  Button,
  Center,
  Container,
  IntroFooter,
  PoweredBy,
  FooterHeading,
  FooterText,
  FlexWrapper,
  Message,
  Tagline,
  TwitterBlueText,
  TwitterInfo,
} from "./styles";

export function Start() {
  return (
    <Container>
      <TopNav />
      <EasyMintLogo />
      <Center>
        <FlexWrapper>
          <Tagline>Create an NFT in minutes</Tagline>
          <Message>
            Create an NFT from any image quickly, without any prior crypto experience.
          </Message>
        </FlexWrapper>
        <Button to="/how-it-works">Get Started</Button>
        <TwitterInfo>
          Note: to be able to set the NFT as your Twitter profile photo, you’ll need{" "}
          <a href="https://twitter.com/i/twitter_blue_sign_up" rel="noreferrer" target="_blank">
            <TwitterBlueText>Twitter Blue</TwitterBlueText>
          </a>.
        </TwitterInfo>
      </Center>
      <IntroFooter>
        <PoweredBy>
          <FooterHeading>Powered By</FooterHeading>
          <Logo />
        </PoweredBy>
        <FooterText>
          Wally is an API that makes it easy to integrate crypto wallets and transactions into your application.
        </FooterText>
      </IntroFooter>
    </Container>
  );
}
