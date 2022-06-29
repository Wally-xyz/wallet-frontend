import * as React from "react";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1 } from "src/v2/components/Styles/Typography";

// import { API_URL } from "../../../../../constants/default";

import {
  Container,
  ContentWrapper,
  EmailInput,
  EmailInputWrapper,
  SubTitle,
  SubmitButton,
} from "./styles";

interface Props {
  email: string;
  onEmailChange(email: string): void;
  onSubmit?(): void;
}

export function Action(props: Props) {
  //   const sendEmail = async () => {
  //     fetch(`${API_URL}/auth/sendcode?email=${encodeURIComponent(props.email)}`, {
  //       method: "POST",
  //       body: JSON.stringify({ email: props.email }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     props.onSubmit?.();
  //   };

  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Sign Up</Heading1>
        <SubTitle align="center">
          Sign up with just your email. Click the link you receive to create an account.
        </SubTitle>
        <EmailInputWrapper>
          <EmailInput label="Email Address" />
          <SubmitButton>Send Email</SubmitButton>
        </EmailInputWrapper>
      </ContentWrapper>
    </Container>
  );
}
