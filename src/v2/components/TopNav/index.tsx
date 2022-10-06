import * as React from "react";

// import { ChevronDown } from "src/v2/icons/ChevronDown";
import { ExternalLink } from "src/v2/icons/ExternalLink";
import { Logo } from "src/v2/icons/Logo";

import { Wrapper, IconWrapper, NavLink, NavRouterLink } from "./styles";

export function TopNav({ variant = "BIG" }: { variant?: string }) {
  return (
    <Wrapper variant={variant}>
      <NavRouterLink to="/how-it-works">How It Works</NavRouterLink>
      {/*<NavLink href="/dummy">
        Demos
        <IconWrapper>
          <ChevronDown />
        </IconWrapper>
      </NavLink>*/}
      <NavLink target="_blank" href="https://docs.wally.xyz">
        Docs
        <IconWrapper>
          <ExternalLink />
        </IconWrapper>
      </NavLink>
      <NavLink target="_blank" href="https://wally.xyz">
        <Logo />
      </NavLink>
    </Wrapper>
  );
}
