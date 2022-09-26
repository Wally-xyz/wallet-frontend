import * as React from "react";
import { NextStepButton, PrevStepButton } from "src/v2/components/Styles/NavButtons";
import { Heading2, Heading5, Paragraph } from "src/v2/components/Styles/Typography";
import { TopNav } from "src/v2/components/TopNav";
import { Code } from "../../../Code";
import { Illustration } from "./Illustration";

import {
  ApiTitle,
  CodeBlockTitle,
  Container,
  Content,
  Footer,
  Highlightor,
  Option,
  OptionsWrapper,
  TopBarWrapper,
  Separator,
} from "./styles";

export function Info() {
  return (
    <Container>
      <TopBarWrapper>
        <TopNav variant="SMALL" />
      </TopBarWrapper>
      <Content>
        <Heading5>Step 4</Heading5>
        <Heading2>
          The NFT is minted using user’s funds and shown with the ability to share
        </Heading2>
        <Paragraph>
          Users pay you with a credit card and the crypto is paid directly to the blockchain from an
          app wallet. This means users never touch the tokens and you don’t need to use onboarding
          providers like Moonpay or Ramp.
        </Paragraph>
        <ApiTitle>Wally API Process</ApiTitle>
        <Illustration />
        <ApiTitle>Code Snippets</ApiTitle>
        <OptionsWrapper>
          <Option>Payload</Option>
          <Option>Curl</Option>
          <Option>Javascript</Option>
          <Option>Python</Option>
        </OptionsWrapper>
        <Highlightor />
        <Separator />
        <CodeBlockTitle>Request</CodeBlockTitle>
        <Code
          code={`curl -i -X POST \\
  https://docs.wallylabs.xyz/nfts/create/from-uri \\
  -H 'Authorization: Bearer <YOUR_JWT_HERE>' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "uri": "string",
    "walletId": "string"
  }'`}
        />
        <CodeBlockTitle>Response</CodeBlockTitle>
        <Code
          code={`{
  "id": "string",
  "appBalance": "string",
  "contractAddress": "string",
  "txHash": "string",
  "uri": "string",
  "walletId": "string"
}`}
        />
      </Content>
      <Footer>
        <PrevStepButton to="/enter-email" />
        <NextStepButton to="/connect-twitter" />
      </Footer>
    </Container>
  );
}
