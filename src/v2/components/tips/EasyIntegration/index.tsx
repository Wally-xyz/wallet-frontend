import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
`;

const Text = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;
  line-height: 25px;
  margin-top: 8px;
`;

interface Props {
  className?: string;
}

export function EasyIntegration(props: Props) {
  return (
    <article className={props.className}>
      <Header>💎 Tip: Wally easily integrates with your existing user accounts</Header>
      <Text>
        Use any sign in flow whether it’s a custom sign up flow, Google, Facebook, Apple, etc
      </Text>
    </article>
  );
}
