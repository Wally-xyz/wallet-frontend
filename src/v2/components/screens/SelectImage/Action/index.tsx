import * as React from "react";

import { BackButton } from "src/v2/components/Styles/BackButton";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1 } from "src/v2/components/Styles/Typography";
import { PrimaryButton } from "src/v2/components/Styles/Button";

import {
  ButtonSection,
  Container,
  ContentWrapper,
  ImageWrapper,
  SubTitle,
  ImageTitle,
  ImageSubTitle,
  ImageSection,
} from "./styles";

export function Action() {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Select Image</Heading1>
        <SubTitle>
          Select your image from the options below, or upload your own image to mint an NFT from the
          selected image.
        </SubTitle>
        <ImageSection>
          <ImageWrapper>
            <ImageTitle>Dronies</ImageTitle>
            <img src="/images/dronies.svg" />
            <ImageSubTitle>16 of 200 Remaining</ImageSubTitle>
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>Dronies</ImageTitle>
            <img style={{ marginTop: -8 }} src="/images/mmcc.svg" />
            <ImageSubTitle>98 of 100 Remaining</ImageSubTitle>
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>Age of SAM</ImageTitle>
            <img src="/images/age-of-sam.svg" />
            <ImageSubTitle>2 of 360 Remaining</ImageSubTitle>
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>Upload Image</ImageTitle>
            <img src="/images/upload-image.svg" />
          </ImageWrapper>
        </ImageSection>
        <ButtonSection>
          <BackButton />
          <PrimaryButton>Purchase NFT</PrimaryButton>
        </ButtonSection>
      </ContentWrapper>
    </Container>
  );
}
