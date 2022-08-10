import * as React from "react";
import { Venly } from "@venly/web3-provider";
import Web3 from "web3";

import { ChevronDown } from "src/v2/icons/ChevronDown";
import { ExternalLink } from "src/v2/icons/ExternalLink";
import { Logo } from "src/v2/icons/Logo";

import { Wrapper, IconWrapper, NavButton, NavLink, NavRouterLink } from "./styles";

export function TopNav({ variant = "BIG" }: { variant?: string }) {
  const connectMMWallet = () => {
    (window as any).ethereum.request({ method: "eth_requestAccounts" });
  };

  let web3;
  const connectVinly = () => {
    const options = {
      clientId: "Testaccount",
      environment: "staging", // ptional, production by default
      signMethod: "POPUP", // optional, REDIRECT by default
      bearerTokenProvider: () => "obtained_bearer_token", // optional, default undefined
      // optional: you can set an identity provider to be used when authenticating
      authenticationOptions: {
        idpHint: "google",
      },
      secretType: "ETHEREUM", // optional, ETHEREUM by default
    };
    Venly.createProviderEngine(options as any).then(provider => {
      web3 = new Web3(provider);
      console.log("web3 = ", web3);
    });
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
      <NavButton onClick={connectMMWallet}>Connect MM</NavButton>
      <NavButton onClick={connectVinly}>Connect Vinly</NavButton>
      <Logo />
    </Wrapper>
  );
}
