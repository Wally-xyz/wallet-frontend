import * as React from "react";

import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";

import {
  ButtonSection,
  Container,
  ContentWrapper,
  Dronie,
  TwitterButtonText,
  // OpenSeaButton,
  // TwitterText,
  HighlightedText,
} from "./styles";
import { PrimaryButton } from "src/v2/components/Styles/Button";
import { Twitter } from "src/v2/icons/Twitter";
import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
// import { OpenSea } from "src/v2/icons/OpenSea";
// import { Separator } from "src/v2/components/Styles/Layout";

export function Action() {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Mission Accomplished</Heading1>
        <Heading3 align="center" width="80%">
          View your NFT as your Twitter profile photo, on <HighlightedText>OpenSea</HighlightedText>
          , or download the image.
        </Heading3>
        <FlexColumn>
          <Dronie src="/images/dronies.png" />
          <ButtonSection>
            <FlexColumn>
              <PrimaryButton>
                <FlexRow>
                  <Twitter /> <TwitterButtonText>View Profile</TwitterButtonText>
                </FlexRow>
              </PrimaryButton>
            </FlexColumn>
          </ButtonSection>
        </FlexColumn>
      </ContentWrapper>
    </Container>
  );
}
