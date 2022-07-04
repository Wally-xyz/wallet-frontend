import * as React from "react";

import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";
import { FlexColumn, FlexRow, Separator } from "src/v2/components/Styles/Layout";

import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";
import { Step4 } from "./Steps/Step4";
import { Step5 } from "./Steps/Step5";

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
  WhiteText,
  Step,
  StepText,
  StepLabel,
} from "./styles";

export function Action() {
  const [activeTab, setActiveTab] = React.useState("QR_CODE");
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <TwitterMessage>Requires Twitter Blue</TwitterMessage>
        <Heading1>Connect to Twitter</Heading1>
        <Heading3 align="center" margin="16px" width="80%">
          Use your computer’s webcam to scan the Twitter QR code, or paste the link.
        </Heading3>
        <DetailSection>
          <ButtonSection justify="flex-start">
            <ConnectButton onClick={() => setActiveTab("QR_CODE")} active={activeTab === "QR_CODE"}>
              QR Code
            </ConnectButton>
            <Separator width="8px" />
            <ConnectButton onClick={() => setActiveTab("LINK")} active={activeTab === "LINK"}>
              Link
            </ConnectButton>
          </ButtonSection>
          {activeTab === "QR_CODE" ? (
            <FlexRow align="baseline">
              <FlexColumn width="25%">
                <Step align="baseline">
                  <StepLabel>Step 1</StepLabel>
                  <Step1 />
                  <StepText>Open the mobile app</StepText>
                </Step>
                <Step align="baseline">
                  <StepLabel>Step 2</StepLabel>
                  <Step2 />
                  <StepText>
                    Select <WhiteText>Choose NFT</WhiteText>
                  </StepText>
                </Step>
              </FlexColumn>
              <Separator width="32px" />
              <FlexColumn width="25%">
                <Step align="baseline">
                  <StepLabel>Step 3</StepLabel>
                  <Step3 />
                  <StepText>Visit your profile</StepText>
                </Step>
                <Step align="baseline">
                  <StepLabel>Step 4</StepLabel>
                  <Step4 />
                  <StepText>
                    Select <WhiteText>Scan QR Code</WhiteText>
                  </StepText>
                </Step>
              </FlexColumn>
              <Separator width="32px" />
              <Step align="baseline" width="45%">
                <StepLabel>Step 5</StepLabel>
                <Step5 />
                <StepText>
                  Scan your phone’s QR Code. If the code isn’t scanning try using the{" "}
                  <WhiteText>Paste Link</WhiteText> option.
                </StepText>
              </Step>
            </FlexRow>
          ) : (
            <>
              <LinkInfoText>
                <WalletConnectText>From the WalletConnect page:</WalletConnectText>
                <OrderedList>
                  <li>Tap on the QR code</li>
                  <li>
                    Tap <WhiteText>Copy link</WhiteText>
                  </li>
                  <li>Paste the URL below</li>
                </OrderedList>
              </LinkInfoText>
              <Input label="Link" placeholder="Paste link here" />
              <SubmitButton>Submit</SubmitButton>
            </>
          )}
        </DetailSection>
      </ContentWrapper>
    </Container>
  );
}
