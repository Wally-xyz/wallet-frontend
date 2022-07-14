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
  onImageChange: (file: File) => void;
  onNameChange: (name: string) => void;
  onSubmit: () => void;
  setImageUrl: (url: string) => void;
}

export function Action(props: Props) {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = React.useState(props.imageUrl);

  const updateSelectedImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    props.setImageUrl(imageUrl);
  };

  React.useEffect(() => {
    if (props.imageUrl || props.image) {
      setSelectedImage("uploaded-image");
      if (props.imageUrl) {
        props.setImageUrl(props.imageUrl);
      }
    } else {
      setSelectedImage("/images/dronies");
      props.setImageUrl("/images/dronies.png");
    }
  }, []);

  React.useEffect(() => {
    if (
      props.imageUrl &&
      !["/images/dronies.png", "/images/mmcc.png", "/images/age-of-sam.gif"].includes(
        props.imageUrl,
      )
    ) {
      setUploadedImageUrl(props.imageUrl);
      setSelectedImage("uploaded-image");
    }
  }, [props.imageUrl]);

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
              <ImageContainer
                selected={selectedImage === "/images/dronies.png"}
                onClick={() => updateSelectedImage("/images/dronies.png")}
              >
                <Image src="/images/dronies.png" />
              </ImageContainer>
              <ImageSubTitle>16 of 200 Remaining</ImageSubTitle>
            </ImageWrapper>
            <ImageWrapper>
              <ImageTitle>MMCC</ImageTitle>
              <ImageContainer
                selected={selectedImage === "/images/mmcc.png"}
                onClick={() => updateSelectedImage("/images/mmcc.png")}
              >
                <Image src="/images/mmcc.png" />
              </ImageContainer>
              <ImageSubTitle>98 of 100 Remaining</ImageSubTitle>
            </ImageWrapper>
            <ImageWrapper>
              <ImageTitle>Age of SAM</ImageTitle>
              <ImageContainer
                selected={selectedImage === "/images/age-of-sam.gif"}
                onClick={() => updateSelectedImage("/images/age-of-sam.gif")}
              >
                <Image src="/images/age-of-sam.gif" />
              </ImageContainer>
              <ImageSubTitle>2 of 360 Remaining</ImageSubTitle>
            </ImageWrapper>
            <ImageUpload
              image={props.image}
              imageUrl={uploadedImageUrl}
              onChange={props.onImageChange}
              selected={selectedImage === "uploaded-image"}
              setSelected={() => setSelectedImage("uploaded-image")}
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
