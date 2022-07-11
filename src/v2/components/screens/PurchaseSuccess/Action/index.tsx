import * as React from "react";

import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";

import {
  ButtonSection,
  Container,
  ContentWrapper,
  Dronie,
  TwitterButtonText,
  OpenSeaButton,
  TwitterText,
  HighlightedText,
} from "./styles";
import { PrimaryLinkButton } from "src/v2/components/Styles/Button";
import { Twitter } from "src/v2/icons/Twitter";
import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { OpenSea } from "src/v2/icons/OpenSea";

export function Action() {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Purchase Successful</Heading1>
        <Heading3 align="center" width="80%">
          View your NFT on OpenSea or connect to Twitter to set the NFT image as your profile photo.
        </Heading3>
        <FlexColumn>
          <Dronie src="/images/dronies.png" />
          <ButtonSection>
            <OpenSeaButton>
              <FlexRow>
                <OpenSea />
                <TwitterButtonText>View NFT</TwitterButtonText>
              </FlexRow>
            </OpenSeaButton>
            <FlexColumn>
              <PrimaryLinkButton to="/connect-twitter">
                <FlexRow>
                  <Twitter /> <TwitterButtonText>Connect</TwitterButtonText>
                </FlexRow>
              </PrimaryLinkButton>
              <TwitterText>
                Requires <HighlightedText>Twitter Blue</HighlightedText>
              </TwitterText>
            </FlexColumn>
          </ButtonSection>
        </FlexColumn>
      </ContentWrapper>
    </Container>
  );
}
