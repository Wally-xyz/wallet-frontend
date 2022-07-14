import * as React from "react";

import { BackButton } from "src/v2/components/Styles/BackButton";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";
import { PrimaryButton } from "src/v2/components/Styles/Button";
import { ImageUpload } from "../../../ImageUpload";

import {
  ButtonSection,
  Container,
  ContentWrapper,
  ImageWrapper,
  ImageContainer,
  SelectedImageContainer,
  Image,
  ImageTitle,
  ImageSubTitle,
  ImageSection,
} from "./styles";
import { FlexRow } from "src/v2/components/Styles/Layout";

export interface Props {
  address?: string;
  image?: File;
  imageUrl?: string;
  name: string;
  uploading?: boolean;
  onImageChange(file: File): void;
  onNameChange(name: string): void;
  onSubmit(): void;
}

export function Action(props: Props) {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Select Image</Heading1>
        <Heading3 align="center" width="80%">
          Select your image from the options below, or upload your own image to mint an NFT from the
          selected image.
        </Heading3>
        <ImageSection>
          <FlexRow align={"baseline"}>
            <ImageWrapper>
              <ImageTitle>Dronies</ImageTitle>
              <SelectedImageContainer>
                <Image src="/images/dronies.png" />
              </SelectedImageContainer>
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
            <ImageUpload
              image={props.image}
              imageUrl={props.imageUrl}
              onChange={props.onImageChange}
            />
          </FlexRow>
          <ButtonSection>
            <BackButton />
            <PrimaryButton loading={props.uploading} onClick={props.onSubmit}>
              Purchase NFT
            </PrimaryButton>
          </ButtonSection>
        </ImageSection>
      </ContentWrapper>
    </Container>
  );
}
