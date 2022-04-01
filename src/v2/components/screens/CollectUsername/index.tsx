import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { Input as _Input } from "../../Input";
import { Button } from "../../Button";
import { API_URL } from "../../../../constants/default";

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
  padding-left: 26px;
`;

const Submit = styled(Button)`
  margin-top: 34px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
`;

const InputContainer = styled.div`
  position: relative;
`

const AtSymbol = styled.div`
  position: absolute;
  font-size: 24px;
  bottom: 8px;
  left: 6px;
`

interface Props {
  username: string;
  onUsernameChange(username: string): void;
  onSubmit?(): void;
}

export function CollectUsername(props: Props) {
  const submitUsername = async (username: string) => {
    const body = {
      'twitter_handle': username,
    };
    await fetch(`${API_URL}/auth/verifyemail?twitter_handle=username`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(_ => {
        props.onSubmit?.();
      });
  };

  return (
    <Chrome>
      <Container
        onSubmit={e => {
          e.preventDefault();
          submitUsername(props.username);
        }}
      >
        <Title>🐦 What’s your Twitter username?</Title>
        <Disclaimer>We’ll help you display your NFT as your profile picture.</Disclaimer>
        <InputContainer>
          <AtSymbol>@</AtSymbol>
          <Input
            placeholder="twitter"
            value={props.username}
            onChange={e => props.onUsernameChange(e.currentTarget.value)}
          />
        </InputContainer>
        <Submit disabled={!props.username}>Submit</Submit>
      </Container>
    </Chrome>
  );
}
