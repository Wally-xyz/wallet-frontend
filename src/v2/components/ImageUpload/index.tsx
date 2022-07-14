import * as React from "react";
import styled from "styled-components";

import { FlexColumn } from "../Styles/Layout";
import { CourierText } from "../Styles/Typography";

const Input = styled.input`
  visibility: hidden;
  width: 0;
`;

const ImageWrapper = styled(FlexColumn)`
  align-items: flex-start;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 24px;
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;

  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;
  cursor: pointer;
`;

export const ImageTitle = styled(CourierText)`
  margin-bottom: 12px;
`;

const ImageContainer = styled(FlexColumn)`
  min-height: 120px;
`;

interface Props {
  className?: string;
  image?: File;
  imageUrl?: string;
  onChange?(image: File): void;
}

export function ImageUpload(props: Props) {
  const input = React.useRef<HTMLInputElement>(null);
  const image = props.imageUrl || (props.image ? URL.createObjectURL(props.image) : undefined);

  const handleFile = React.useCallback(() => {
    if (!input?.current?.files?.[0]) {
      return;
    }

    const file = input.current.files[0];
    props.onChange?.(file);
  }, [input]);

  return (
    <ImageWrapper>
      <label>
        <ImageTitle>Upload Image</ImageTitle>
        <ImageContainer>
          <Image src={image ? image : "/images/upload-image.svg"} />
        </ImageContainer>
        <Input
          accept="image/png, image/jpeg, image/gif"
          className={props.className}
          ref={input}
          type="file"
          onChange={handleFile}
        />
      </label>
    </ImageWrapper>
  );
}
