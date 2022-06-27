import * as React from "react";
import { NextStepButton, PrevStepButton } from "src/v2/components/Styles/NavButtons";
import { Heading2, Heading5, Paragraph } from "src/v2/components/Styles/Typography";
import { TopNav } from "src/v2/components/TopNav";
import { Code } from "../../../Code";

import {
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
        <Heading5>Step 2</Heading5>
        <Heading2>Select image for NFT</Heading2>
        <Paragraph>The Wally API supports easily uploading images to IPFS</Paragraph>
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
        <NextStepButton to="/" />
      </Footer>
    </Container>
  );
}
