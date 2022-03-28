import * as React from "react";
import styled from "styled-components";

import { Bordered, Container as _Container, Content } from "../ImageUpload";

const Container = styled(_Container)`
  cursor: default;
`;

interface Props {
  className?: string;
  imageUrl: string;
}

export function ImagePreview(props: Props) {
  return (
    <Container className={props.className}>
      <Bordered />
      <Content style={{ backgroundImage: `url(${props.imageUrl})` }} />
    </Container>
  );
}
