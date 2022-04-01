import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { ImageUpload } from "../../ImageUpload";
import { Input } from "../../Input";
import { Button } from "../../Button";

const Container = styled.article`
  box-sizing: border-box;
  max-width: 1000px;
  padding: 20px;
  width: 100%;
`;

const Details = styled.div`
  padding-top: 105px;

  @media (max-width: 940px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 100%;
  }
`;

const Disclaimer = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;

  @media (max-width: 940px) {
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 63px;
  margin-top: 56px;
  flex-wrap: wrap;

  @media (max-width: 940px) {
    align-items: center;
    flex-direction: column;
  }
`;

const Name = styled(Input)`
  margin-top: 39px;

  @media (max-width: 940px) {
    width: 80%;
  }
`;

const Submit = styled(Button)`
  margin-top: 45px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 940px) {
    text-align: center;
  }
`;

interface Props {
  image?: File;
  imageUrl?: string;
  name: string;
  uploading?: boolean;
  onImageChange(file: File): void;
  onNameChange(name: string): void;
  onSubmit(): void;
}

export function UploadImage(props: Props) {
  return (
    <Chrome>
      <Container>
        <Title>🖼 It’s time to upload your image.</Title>
        <Disclaimer>Pick something cool!</Disclaimer>
        <Form
          onSubmit={e => {
            e.preventDefault();

            if (!(props.image && props.name)) {
              return;
            }

            props.onSubmit();
          }}
        >
          <ImageUpload
            image={props.image}
            imageUrl={props.imageUrl}
            onChange={props.onImageChange}
          />
          <Details>
            <Title>🖍 Give it a name.</Title>
            <Disclaimer>Others will see this on the NFT.</Disclaimer>
            <Name
              placeholder="Title"
              value={props.name}
              onChange={e => props.onNameChange(e.currentTarget.value)}
            />
            <Submit disabled={!(props.image && props.name) || props.uploading}>
              {props.uploading ? "Uploading..." : "Done"}
            </Submit>
          </Details>
        </Form>
      </Container>
    </Chrome>
  );
}
