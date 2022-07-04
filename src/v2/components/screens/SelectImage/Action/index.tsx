import * as React from "react";

import { BackButton } from "src/v2/components/Styles/BackButton";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";
import { PrimaryButton } from "src/v2/components/Styles/Button";

import {
  ButtonSection,
  Container,
  ContentWrapper,
  ImageWrapper,
  ImageContainer,
  Image,
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
        <Heading3 align="center">
          Select your image from the options below, or upload your own image to mint an NFT from the
          selected image.
        </Heading3>
        <ImageSection>
          <ImageWrapper>
            <ImageTitle>Dronies</ImageTitle>
            <ImageContainer>
              <Image src="/images/dronies.png" />
            </ImageContainer>
            <ImageSubTitle>16 of 200 Remaining</ImageSubTitle>
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>MMCC</ImageTitle>
            <ImageContainer>
              <Image style={{ marginTop: -8 }} src="/images/mmcc.png" />
            </ImageContainer>
            <ImageSubTitle>98 of 100 Remaining</ImageSubTitle>
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>Age of SAM</ImageTitle>
            <ImageContainer>
              <Image src="/images/age-of-sam.gif" />
            </ImageContainer>
            <ImageSubTitle>2 of 360 Remaining</ImageSubTitle>
          </ImageWrapper>
          <ImageWrapper>
            <ImageTitle>Upload Image</ImageTitle>
            <ImageContainer>
              <Image src="/images/upload-image.svg" />
            </ImageContainer>
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
