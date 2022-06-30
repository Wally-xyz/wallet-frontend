import * as React from "react";

import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";
import { Separator } from "src/v2/components/Styles/Layout";

import {
  DetailSection,
  Container,
  ContentWrapper,
  LinkInfoText,
  TwitterMessage,
  SubmitButton,
  WalletConnectText,
  OrderedList,
  ButtonSection,
  ConnectButton,
} from "./styles";

export function Action() {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <TwitterMessage>Requires Twitter Blue</TwitterMessage>
        <Heading1>Connect to Twitter</Heading1>
        <Heading3 align="center">
          Use your computer’s webcam to scan the Twitter QR code, or paste the link.
        </Heading3>
        <DetailSection>
          <ButtonSection justify="flex-start">
            <ConnectButton>QR Code</ConnectButton>
            <Separator width="8px" />
            <ConnectButton active>Link</ConnectButton>
          </ButtonSection>
          <LinkInfoText>
            <WalletConnectText>From the WalletConnect page:</WalletConnectText>
            <OrderedList>
              <li>Tap on the QR code</li>
              <li>Tap Copy link</li>
              <li>Paste the URL below</li>
            </OrderedList>
          </LinkInfoText>
          <Input label="Link" placeholder="Paste link here" />
          <SubmitButton>Submit</SubmitButton>
        </DetailSection>
      </ContentWrapper>
    </Container>
  );
}
