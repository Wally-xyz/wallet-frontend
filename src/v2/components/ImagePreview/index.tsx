import * as React from "react";
import styled from "styled-components";

const Bordered = styled.div`
  border-radius: 100px;
  border: 4px dashed black;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 940px) {
    border-radius: 86px;
  }
`;

const _Container = styled.label`
  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%),
    linear-gradient(0deg, #ff5959, #ff5959);
  border-radius: 100px;
  cursor: pointer;
  display: block;
  height: 350px;
  position: relative;
  width: 350px;

  @media (max-width: 940px) {
    border-radius: 86px;
    height: 305px;
    width: 305px;
  }
`;

const Content = styled.div`
  align-items: center;
  background: black;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 96px;
  bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 4px;
  position: absolute;
  right: 4px;
  top: 4px;

  @media (max-width: 940px) {
    border-radius: 82px;
  }
`;

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
