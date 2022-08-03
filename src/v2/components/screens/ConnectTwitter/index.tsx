import * as React from "react";

import { Input as _Input } from "../../Input";

import { Container } from "./styles";
import { Action } from "./Action";
import { Info } from "./Info";

interface Props {
  onContinue: (url: string) => void;
}

export function ConnectTwitter(props: Props) {
  return (
    <Container>
      <Action {...props} />
      <Info />
    </Container>
  );
}
