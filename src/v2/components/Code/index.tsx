import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

export function Code({ code }: { code: string }) {
  return (
    <Wrapper>
      <SyntaxHighlighter language="javascript" style={dark} customStyle={{ background: "#180920" }}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  font-family: "Courier";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0025em;
  padding: 0 !important;
  pre {
    background: #180920;
    border-radius: 16px !important;
    padding: 16px 24px !important;
  }
`;
