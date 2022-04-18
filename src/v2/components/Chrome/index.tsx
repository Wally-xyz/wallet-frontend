import * as React from "react";
import styled from "styled-components";

import { EasyMintLogo as Logo } from "../EasyMintLogo";

const Container = styled.article`
  display: grid;
  grid-template-rows: minmax(132px, max-content) 1fr minmax(132px, max-content);
  grid-template-columns: 1fr;
  min-height: 100%;
`;

const Content = styled.div`
  display: grid;
  place-items: center;
`;

const Footer = styled.footer`
  background-color: rgba(171, 49, 246, 0.65);
  box-sizing: border-box;
  padding: 40px;
`;

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 40px;
`;

const Wally = styled(Logo)`
  height: 47px;
`;

interface Props {
  className?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Chrome(props: Props) {
  return (
    <Container className={props.className}>
      <Header>
        <Wally />
      </Header>
      <Content>{props.children}</Content>
      {props.footer ? <Footer>{props.footer}</Footer> : <div />}
    </Container>
  );
}
