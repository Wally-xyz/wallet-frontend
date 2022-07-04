import * as React from "react";
import styled from "styled-components";

import { FlexColumn } from "./Layout";

export const Wrapper = styled(FlexColumn)`
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.label`
  height: 10px;

  /* EasyMint/Input Label */

  font-family: "Courier";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  /* identical to box height, or 71% */

  letter-spacing: 0.04em;

  margin-bottom: 10px;
`;

const InnerInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 100%;
  height: 44px;

  background: #090a0b;
  border: 1px solid #334047;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 674;
  font-size: 14px;
  line-height: 12px;
  /* identical to box height, or 75% */

  letter-spacing: 0.01em;

  color: #f3f5f6;

  &:focus {
    border: 1px solid #36bf64;
    outline: none;
  }
`;

interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
}

export function Input({ label, value, placeholder, onChange }: InputProps) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InnerInput
        placeholder={placeholder}
        value={value}
        onChange={evt => {
          if (onChange) {
            onChange(evt.target.value);
          }
        }}
      />
    </Wrapper>
  );
}
