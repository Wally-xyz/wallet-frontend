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
  padding-top: 145px;
`;

const Disclaimer = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
`;

const Form = styled.form`
  display: grid;
  gap: 63px;
  grid-template-columns: 400px 1fr;
  margin-top: 56px;
`;

const Name = styled(Input)`
  margin-top: 39px;
`;

const Submit = styled(Button)`
  margin-top: 45px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

interface Props {
  image?: File;
  imageUrl?: string;
  name: string;
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
            <Submit disabled={!(props.image && props.name)}>Done</Submit>
          </Details>
        </Form>
      </Container>
    </Chrome>
  );
}
