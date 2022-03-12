import * as React from "react";
import styled from "styled-components";
import { colors, shadows } from "../styles";

const SInput = styled.input`
  border: none;
  background: rgb(${colors.white});
  border-style: none;
  padding: 12px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  box-shadow: ${shadows.hard};
`;

const Input = (props: any) => <SInput {...props} />;

export default Input;

export const SSInput = styled(Input)`
  width: 50%;
  margin: 10px;
  font-size: 14px;
  height: 40px;
`;
