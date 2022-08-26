import * as React from "react";

import { ChevronDown } from "src/v2/icons/ChevronDown";
import { ExternalLink } from "src/v2/icons/ExternalLink";
import { Logo } from "src/v2/icons/Logo";

import { Wrapper, IconWrapper, NavLink, NavRouterLink, NavButton } from "./styles";

export function TopNav({ variant = "BIG" }: { variant?: string }) {
  const connectMMWallet = () => {
    (window as any).ethereum.request({ method: "eth_requestAccounts" });
  };

  return (
    <Wrapper variant={variant}>
      <NavRouterLink to="/how-it-works">How It Works</NavRouterLink>
      <NavLink href="/dummy">
        Demos
        <IconWrapper>
          <ChevronDown />
        </IconWrapper>
      </NavLink>
      <NavLink target="_blank" href="https://docs.wallylabs.xyz">
        Docs
        <IconWrapper>
          <ExternalLink />
        </IconWrapper>
      </NavLink>
      <NavButton onClick={connectMMWallet}>Connect</NavButton>
      <Logo />
    </Wrapper>
  );
}
