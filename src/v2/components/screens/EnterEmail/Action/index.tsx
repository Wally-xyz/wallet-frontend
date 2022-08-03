import * as React from "react";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "src/v2/components/Styles/Button";

import { API_URL } from "../../../../../constants/default";

import { Container, ContentWrapper, InputWrapper, SubTitle, ButtonWrapper } from "./styles";

export interface ActionProps {
  code?: string;
  email?: string;
  onEmailChange?: (email: string) => void;
  onSubmit?: () => void;
  onCodeChange?: (email: string) => void;
  onCodeSubmit?: (obj: { address: string; authToken: string }) => void;
}

export function Action(props: ActionProps) {
  const [showSpinner, setShowSpinner] = React.useState(false);
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search);
  const isEmailMode = pathname === "/enter-email";

  React.useEffect(() => {
    const email = query.get("email");
    const code = query.get("code");
    if (email && props.email !== email) {
      props.onEmailChange?.(email);
    }
    if (code && props.code !== code) {
      props.onCodeChange?.(code);
    }
  }, [query]);

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

  const verifyCode = async (email?: string, code?: string) => {
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
            <ButtonWrapper>
              <PrimaryButton onClick={sendEmail}>Send Email</PrimaryButton>
            </ButtonWrapper>
          </InputWrapper>
        ) : (
          <InputWrapper>
            <Input
              label="Code"
              placeholder="123456"
              value={props.code}
              onChange={props.onCodeChange}
            />
            <ButtonWrapper>
              <PrimaryButton
                loading={showSpinner}
                onClick={() => {
                  setShowSpinner(true);
                  verifyCode(props.email, props.code);
                }}
              >
                Code
              </PrimaryButton>
            </ButtonWrapper>
          </InputWrapper>
        )}
      </ContentWrapper>
    </Container>
  );
}
