import * as React from "react";
import { NextStepButton } from "src/v2/components/Styles/NavButtons";
import { Heading2, Heading5, Heading3 } from "src/v2/components/Styles/Typography";
import { TopNav } from "src/v2/components/TopNav";
import { Code } from "../../../Code";
import { Illustration } from "./Illustration";

import {
  Container,
  Content,
  Footer,
  Highlightor,
  Option,
  OptionsWrapper,
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
        <Heading5>Step 1</Heading5>
        <Heading2>Signup Methods</Heading2>
        <OptionsWrapper>
          <Option>Email Magic Link</Option>
          <Option>Social Signup</Option>
          <Option>Email & Password</Option>
        </OptionsWrapper>
        <Highlightor />
        <Separator />
        <Heading3 align="left">Wally API Process</Heading3>
        <Illustration />
        <SignupText>
          Placeholder text to demonstrate what Wally will be doing in the background here, as well
          as let users know which option(s) are available to them in the API with each of these
          types of signup methods.
        </SignupText>
        <Heading3 align="left">API Call</Heading3>
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
        <NextStepButton to="/select-image" />
      </Footer>
    </Container>
  );
}
