import * as React from "react";

import { Input as _Input } from "../../Input";

import { Container } from "./styles";
import { Action } from "./Action";
import { Info } from "./Info";

interface Props {
  imageUrl: string;
  name: string;
  onSubmit(): void;
}

export function Purchase(props: Props) {
  return (
    <Container>
      <Action />
      <Info />
    </Container>
  );
}
