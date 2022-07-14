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

export const ImageContainer = styled.button<{ selected?: boolean }>`
  display: flex;
  min-height: 120px;
  background: none;
  margin: 0;
  border: none;
  padding: 0;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `outline: 4px solid #c0d0d8;
    outline-offset: 5px;
  `}
`;

interface Props {
  className?: string;
  image?: File;
  imageUrl?: string;
  selected?: boolean;
  onChange?: (image: File) => void;
  setSelected?: () => void;
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
    props.setSelected?.();
  }, [input, props.onChange, props.setSelected]);

  return (
    <ImageWrapper>
      <label>
        <ImageTitle>Upload Image</ImageTitle>
        <ImageContainer selected={props.selected} onClick={props.setSelected}>
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
