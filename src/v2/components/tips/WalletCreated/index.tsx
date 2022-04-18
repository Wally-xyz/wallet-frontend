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
  address?: string;
}

export function WalletCreated(props: Props) {
  return (
    <article className={props.className}>
      <Header>💎 Creating a wallet is simple</Header>
      <Text>
        After registering the user in the EasyMint backend, we hit `/wallets/create` in the Wally API, and Wally created the wallet { props.address } for this user.
      </Text>
    </article>
  );
}
