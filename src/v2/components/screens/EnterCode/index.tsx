import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { Input as _Input } from "../../Input";
import { Button } from "../../Button";
import { API_URL } from "../../../../constants/default";

const Container = styled.article`
  box-sizing: border-box;
  max-width: 1000px;
  padding: 20px;
  width: 100%;
`;

const Explanation = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
`;

const Input = styled(_Input)`
  margin-top: 90px;
  max-width: 250px;
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
  email: string;
  code: string;
  onCodeChange(code: string): void;
  onSubmit(data: { account: string; authToken: string }): void;
}

export function EnterCode(props: Props) {
  const verifyCode = async () => {
    const body = {
      email: props.email,
      code: props.code,
    };
    await fetch(`${API_URL}/auth/verifyemail?email=${props.email}&code=${props.code}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          props.onSubmit({ account: response.user.address, authToken: response.access_token });
        }
      });
  };

  return (
    <Chrome>
      <Container>
        <Title>✅ Nice! Check your email for the magic code.</Title>
        <Explanation>Or click the “Authorize” button on your email.</Explanation>
        <Input
          placeholder="magic code"
          value={props.code}
          onChange={e => props.onCodeChange(e.currentTarget.value)}
        />
        <Submit disabled={!props.code} onClick={verifyCode}>
          Submit code
        </Submit>
      </Container>
    </Chrome>
  );
}
