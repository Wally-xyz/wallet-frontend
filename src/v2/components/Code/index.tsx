import * as React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styled from "styled-components";

export function Code({ code }: { code: string }) {
  return (
    <Wrapper>
      {/* <SyntaxHighlighter language="javascript" style={dark} customStyle={{ background: "#180920" }}>
        {code}
      </SyntaxHighlighter> */}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  font-family: "Courier";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  letter-spacing: 0.0025em;
  background: #180920;
  border-radius: 12px;

  pre {
    border-radius: 12px;
  }
`;
