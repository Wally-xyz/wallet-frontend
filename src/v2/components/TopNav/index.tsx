import * as React from "react";

import { ChevronDown } from "src/v2/icons/ChevronDown";
import { ExternalLink } from "src/v2/icons/ExternalLink";
import { Logo } from "src/v2/icons/Logo";

import { Wrapper, IconWrapper, NavButton, NavLink, NavRouterLink } from "./styles";

export function TopNav({ variant = "BIG" }: { variant?: string }) {
  const connectWallet = () => {
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
      <NavButton onClick={connectWallet}>Connect</NavButton>
      <Logo />
    </Wrapper>
  );
}
