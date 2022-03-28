import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../Chrome";
import { Input as _Input } from "../Input";
import { GradientLink } from "../buttons/Gradient";
import { API_URL } from "../../../constants/default";

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

const Submit = styled(GradientLink)`
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
  onSubmit(): void;
  setAccount(address: string): void;
  setAuthToken(authToken: string): void;
}

export function Step3(props: Props) {
  const verifyCode = async () => {
    const body = {
      'email': props.email,
      'code': props.code,
    }
    await fetch(`${API_URL}/auth/verifyemail?email=${props.email}&code=${props.code}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(response => {
      if(response.access_token) {
        props.setAuthToken(response.access_token)
        props.setAccount(response.user.address)
        props.onSubmit();
      }
    });
  }

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
        <Submit to="/steps/4" onClick={verifyCode}>
          Submit code
        </Submit>
      </Container>
    </Chrome>
  );
}
