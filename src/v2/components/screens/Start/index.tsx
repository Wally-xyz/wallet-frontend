import * as React from "react";
import { WallyConnector } from "src/lib/wally-connector";

import { Logo } from "src/v2/icons/Logo";
import { EasyMintLogo } from "../../EasyMintLogo";
import { TopNav } from "../../TopNav";

import {
  Center,
  Container,
  Footer,
  FooterHeading,
  FooterText,
  FlexWrapper,
  Message,
  Tagline,
  TwitterBlueText,
  TwitterInfo,
  StyledButton,
} from "./styles";

export function Start({ wallyConnector }: { wallyConnector: WallyConnector }) {
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
        <StyledButton onClick={() => wallyConnector.loginWithEmail()}>Get Started</StyledButton>
        <TwitterInfo>
          Note: to be able to set the NFT as your Twitter profile photo, you’ll need{" "}
          <TwitterBlueText>Twitter Blue</TwitterBlueText>.
        </TwitterInfo>
      </Center>
      <Footer>
        <FooterHeading>POWERED BY</FooterHeading>
        <Logo />
        <FooterText>
          Wally is an API that makes it easy to integrate crypto wallets and transactions into your
          application.
        </FooterText>
      </Footer>
    </Container>
  );
}
