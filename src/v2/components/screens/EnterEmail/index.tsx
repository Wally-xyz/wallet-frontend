import * as React from "react";

import { Input as _Input } from "../../Input";

import { Container } from "./styles";
import { Action } from "./Action";
import { Info } from "./Info";

interface Props {
  email: string;
  onEmailChange(email: string): void;
  onSubmit?(): void;
}

export function EnterEmail(props: Props) {
  return (
    <Container>
      <Action {...props} />
      <Info />
    </Container>
  );
}
