import * as React from "react";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";
import { useLocation } from "react-router-dom";

import { API_URL } from "../../../../../constants/default";

import { Container, ContentWrapper, InputWrapper, SubTitle, SubmitButton } from "./styles";

export interface ActionProps {
  code?: string;
  email?: string;
  onEmailChange?: (email: string) => void;
  onSubmit?: () => void;
  onCodeChange?: (email: string) => void;
  onCodeSubmit?: (obj: { address: string; authToken: string }) => void;
}

export function Action(props: ActionProps) {
  const { pathname } = useLocation();
  const isEmailMode = pathname === "/enter-email";

  const sendEmail = async () => {
    if (!props.email) {
      return;
    }
    fetch(`${API_URL}/auth/sendcode?email=${encodeURIComponent(props.email)}`, {
      method: "POST",
      body: JSON.stringify({ email: props.email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.onSubmit?.();
  };

  const verifyCode = async () => {
    const { email, code } = props;
    if (!email || !code) {
      return;
    }
    const body = {
      email,
      code,
    };
    await fetch(`${API_URL}/auth/verifyemail?email=${encodeURIComponent(email)}&code=${code}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          const ls = window.localStorage;
          ls.setItem("token", response.access_token);
          props.onCodeSubmit?.({ address: response.address, authToken: response.access_token });
        }
      });
  };

  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Sign Up</Heading1>
        <SubTitle align="center">
          Sign up with just your email. Click the link you receive to create an account.
        </SubTitle>
        {isEmailMode ? (
          <InputWrapper>
            <Input
              label="Email Address"
              placeholder="name@example.com"
              value={props.email}
              onChange={props.onEmailChange}
            />
            <SubmitButton onClick={sendEmail}>Send Email</SubmitButton>
          </InputWrapper>
        ) : (
          <InputWrapper>
            <Input
              label="Code"
              placeholder="123456"
              value={props.code}
              onChange={props.onCodeChange}
            />
            <SubmitButton onClick={verifyCode}>Code</SubmitButton>
          </InputWrapper>
        )}
      </ContentWrapper>
    </Container>
  );
}
