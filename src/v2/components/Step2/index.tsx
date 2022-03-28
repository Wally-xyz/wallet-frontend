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
  onEmailChange(email: string): void;
  onSubmit?(): void;
}

export function Step2(props: Props) {
  const sendEmail = () => {
    const body = {
        'email': props.email,
    }
    fetch(`${API_URL}/auth/sendcode?email=${props.email}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
  }

  return (
    <Chrome>
      <Container>
        <Title>📩 Let’s start with your email.</Title>
        <Disclaimer>We’ll need to verify it.</Disclaimer>
        <Input
          placeholder="name@email.com"
          value={props.email}
          onChange={e => props.onEmailChange(e.currentTarget.value)}
        />
        <Submit to="/steps/3" onClick={sendEmail}>
          Send verification
        </Submit>
      </Container>
    </Chrome>
  );
}
