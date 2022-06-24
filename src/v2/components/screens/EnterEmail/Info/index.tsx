import * as React from "react";
import { TopNav } from "src/v2/components/TopNav";
import { RightArrow } from "src/v2/icons/RightArrow";
import { Code } from "../../../Code";
import { Illustration } from "./Illustration";

import {
  APICallTitle,
  Container,
  Content,
  Footer,
  Highlightor,
  NextStepButton,
  NextStepText,
  Option,
  OptionsWrapper,
  SignupMethodSubtitle,
  SignupMethodTitle,
  StepTitle,
  TopBarWrapper,
  Separator,
  SignupText,
} from "./styles";

export function Info() {
  return (
    <Container>
      <TopBarWrapper>
        <TopNav variant="SMALL" />
      </TopBarWrapper>
      <Content>
        <StepTitle>Step 1</StepTitle>
        <SignupMethodTitle>Signup Methods</SignupMethodTitle>
        <OptionsWrapper>
          <Option>Email Magic Link</Option>
          <Option>Social Signup</Option>
          <Option>Email & Password</Option>
        </OptionsWrapper>
        <Highlightor />
        <Separator />
        <SignupMethodSubtitle>Wally API Process</SignupMethodSubtitle>
        <Illustration />
        <SignupText>
          Placeholder text to demonstrate what Wally will be doing in the background here, as well
          as let users know which option(s) are available to them in the API with each of these
          types of signup methods.
        </SignupText>
        <APICallTitle>API Call</APICallTitle>
        <Code
          code={`fetch(
    'https://api.wallylabs.xyz/wallets/create', {
      method: 'POST',
      body: JSON.stringify({
        'email': email,
        'id': user.id,
      }),
      headers={
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${wally_api_key}\`
      },
    }
)`}
        />
      </Content>
      <Footer>
        <NextStepButton to={"/"}>
          <NextStepText>Next Step</NextStepText>
          <RightArrow />
        </NextStepButton>
      </Footer>
    </Container>
  );
}
