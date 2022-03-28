import * as React from "react";
import styled from "styled-components";

const Container = styled.label`
  display: block;
  padding-bottom: 9px;
  position: relative;
`;

const _Input = styled.input`
  background: transparent;
  border: none;
  color: #ffffff;
  display: block;
  font-size: 24px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Line = styled.div`
  height: 3px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%),
    linear-gradient(0deg, #c4c4c4, #c4c4c4);
`;

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props;

  return (
    <Container className={className}>
      <_Input {...rest} />
      <Line />
    </Container>
  );
}
