import * as React from "react";

import { Input as _Input } from "../../Input";

import { Container } from "./styles";
import { Action, ActionProps } from "./Action";
import { Info } from "./Info";

export function EnterEmail(props: ActionProps) {
  return (
    <Container>
      <Action {...props} />
      <Info />
    </Container>
  );
}
