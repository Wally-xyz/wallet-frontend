import * as React from "react";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "src/v2/components/Styles/Button";

import { Container, ContentWrapper, InputWrapper, SubTitle, ButtonWrapper } from "./styles";

export interface ActionProps {
  code?: string;
  email?: string;
  onEmailChange?: (email: string) => void;
  onSubmit?: () => void;
  onCodeChange?: (email: string) => void;
  onCodeSubmit?: (obj: { address: string; authToken: string }) => void;
  wallyConnector: any;
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
    props.wallyConnector.getOTP(props.email);
    props.onSubmit?.();
  };

  const verifyCode = async (email?: string, code?: string) => {
    if (!email || !code) {
      return;
    }
    const response = await props.wallyConnector.verifyOTP(props.email, props.code);
    if (response.token) {
      const ls = window.localStorage;
      ls.setItem("token", response.token);
      props.wallyConnector.setAuthToken(response.token);
      props.onCodeSubmit?.({ address: response.id, authToken: response.token });
    }
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
