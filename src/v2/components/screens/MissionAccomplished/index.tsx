import * as React from "react";

import { Input as _Input } from "../../Input";

import { Container } from "./styles";
import { Action, Props } from "./Action";
import { Info } from "./Info";

export function MissionAccomplished(props: Props) {
  return (
    <Container>
      <Action {...props} />
      <Info />
    </Container>
  );
}
