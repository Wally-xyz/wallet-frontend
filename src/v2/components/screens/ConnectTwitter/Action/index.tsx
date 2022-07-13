import * as React from "react";

import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";
import { FlexColumn, FlexRow, Separator } from "src/v2/components/Styles/Layout";

import { Step1 } from "./Steps/Step1";
import { Step2 } from "./Steps/Step2";
import { Step3 } from "./Steps/Step3";
import { Step4 } from "./Steps/Step4";

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
  Step5Text,
  StepText,
  StepLabel,
  Scanner,
  ScannerTitle,
  Step5Wrapper,
  Step5Inner,
} from "./styles";

interface Props {
  onContinue: (url: string) => void;
}

enum ScannerState {
  Checking,
  Failure,
  Success,
}

export function Action(props: Props) {
  const [activeTab, setActiveTab] = React.useState("QR_CODE");
  const [scanning, setScanning] = React.useState(false);
  const [inputUrl, setInputUrl] = React.useState("");
  const [scannerState, setScannerState] = React.useState(ScannerState.Checking);

  // const waitForConnection = () => {
  //   setTimeout(() => {
  //     setScannerState(ScannerState.Failure);
  //   }, 10000);
  // };

  let scannerTitle =
    "💡 Tip: Hold the phone close to the camera, then slowly move it back towards you.";
  if (scannerState === ScannerState.Success) {
    scannerTitle = "✅ Got it! Connecting...";
  } else if (scannerState === ScannerState.Failure) {
    scannerTitle =
      "❌ Hmm, we're having trouble connecting to twitter. Try killing your twitter app and trying again.";
  }

  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <TwitterMessage>Requires Twitter Blue</TwitterMessage>
        <Heading1>Connect to Twitter</Heading1>
        <Heading3 align="center" margin="8px" width="80%">
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
            <FlexRow align="baseline" width="100%">
              <FlexColumn>
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
              <FlexColumn>
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
              <Step align="baseline" width="60%" tabIndex={0} onClick={() => setScanning(true)}>
                <StepLabel>Step 5</StepLabel>
                <Step5Wrapper>
                  <Step5Inner>
                    {scanning ? (
                      <>
                        <div style={{ height: "100%" }}>
                          <Scanner
                            validator={() => true}
                            onSuccess={url => {
                              const sound = require("../../../../../assets/success-sound-effect.mp3");
                              const audio = new Audio(sound);
                              audio.volume = 0.1;
                              audio.play();
                              setScannerState(ScannerState.Success);
                              // waitForConnection();
                              // setTimeout(() => props.onContinue(url), 2000);
                              props.onContinue(url);
                            }}
                            onFailure={() => {
                              setScannerState(ScannerState.Failure);
                              setTimeout(() => setScannerState(ScannerState.Checking), 2000);
                            }}
                          />
                        </div>
                        <ScannerTitle>{scannerTitle}</ScannerTitle>
                      </>
                    ) : (
                      <Step5Text>
                        Click here to scan your phone’s QR Code. If the code isn’t scanning try
                        using the <WhiteText>Paste Link</WhiteText> option.
                      </Step5Text>
                    )}
                  </Step5Inner>
                </Step5Wrapper>
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
              <Input
                label="Link"
                placeholder="Paste link here"
                value={inputUrl}
                onChange={val => setInputUrl(val)}
              />
              <SubmitButton
                onClick={() => {
                  console.log(inputUrl);
                  props.onContinue(inputUrl);
                }}
              >
                Submit
              </SubmitButton>
            </>
          )}
        </DetailSection>
      </ContentWrapper>
    </Container>
  );
}
