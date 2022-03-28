import * as React from "react";
import styled from "styled-components";

import { Logo } from "../Logo";

const Container = styled.article`
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  height: 100%;
`;

const Header = styled.header`
  padding: 40px;
`;

const Wally = styled(Logo)`
  height: 47px;
`;

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function Chrome(props: Props) {
  return (
    <Container className={props.className}>
      <Header>
        <Wally />
      </Header>
    </Container>
  );
}
