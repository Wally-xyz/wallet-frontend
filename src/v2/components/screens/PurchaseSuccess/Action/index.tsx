import * as React from "react";

import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1 } from "src/v2/components/Styles/Typography";

import {
  ButtonSection,
  Container,
  ContentWrapper,
  SubTitle,
  Dronie,
  TwitterButtonText,
  MainSection,
  OpenSeaButton,
} from "./styles";
import { PrimaryButton } from "src/v2/components/Styles/Button";
import { Twitter } from "src/v2/icons/Twitter";
import { FlexRow } from "src/v2/components/Styles/Layout";
import { OpenSea } from "src/v2/icons/OpenSea";
// import { Separator } from "src/v2/components/Styles/Layout";

export function Action() {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Purchase Successful</Heading1>
        <SubTitle>
          View your NFT on OpenSea or connect to Twitter to set the NFT image as your profile photo.
        </SubTitle>
        <MainSection>
          <Dronie src="/images/dronies.png" />
          <ButtonSection>
            <OpenSeaButton>
              <FlexRow>
                <OpenSea />
                <TwitterButtonText>View NFT</TwitterButtonText>
              </FlexRow>
            </OpenSeaButton>
            <PrimaryButton>
              <FlexRow>
                <Twitter /> <TwitterButtonText>Connect</TwitterButtonText>
              </FlexRow>
            </PrimaryButton>
          </ButtonSection>
        </MainSection>
      </ContentWrapper>
    </Container>
  );
}
