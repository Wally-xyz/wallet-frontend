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

export function WalletFunding(props: Props) {
  return (
    <article className={props.className}>
      <Header>💎 Tip: Users don’t need a funded wallet</Header>
      <Text>
        Integrate with various payment providers to handle all the blockchain logic and payment
        separately.
      </Text>
    </article>
  );
}
