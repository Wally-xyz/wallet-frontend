import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { Input as _Input } from "../../Input";
import { Button } from "../../Button";

const Container = styled.form`
  box-sizing: border-box;
  max-width: 1000px;
  padding: 20px;
  width: 100%;
`;

const Disclaimer = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
`;

const Input = styled(_Input)`
  margin-top: 90px;
  max-width: 666px;
  width: 100%;
`;

const Submit = styled(Button)`
  margin-top: 34px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

interface Props {
  username: string;
  onUsernameChange(username: string): void;
  onSubmit?(): void;
}

export function CollectUsername(props: Props) {
  return (
    <Chrome>
      <Container
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit?.();
        }}
      >
        <Title>🐦 What’s your Twitter username?</Title>
        <Disclaimer>We’ll help you display your NFT as your profile picture.</Disclaimer>
        <Input
          placeholder="@twitter-username"
          value={props.username}
          onChange={e => props.onUsernameChange(e.currentTarget.value)}
        />
        <Submit disabled={!props.username}>Submit</Submit>
      </Container>
    </Chrome>
  );
}
