import { FlexColumn } from "src/v2/components/Styles/Layout";
import { Heading2 } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

import { Input as _Input } from "../../../Input";

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  background: #121517;
  padding: 48px 0;
`;

export const EmailInput = styled(_Input)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 416px;
  height: 44px;

  background: #090a0b;
  border: 1px solid #334047;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  font-family: "New York";
  font-style: normal;
  font-weight: 674;
  font-size: 16px;
  line-height: 12px;
  /* identical to box height, or 75% */

  letter-spacing: 0.01em;

  color: #45565f;

  margin-top: 10px;
`;

export const SubTitle = styled(Heading2)`
  width: 416px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin-top: 100px;
`;

export const EmailInputWrapper = styled(FlexColumn)`
  margin-top: 64px;
  align-items: flex-start;
`;

export const EmailLabel = styled.label`
  height: 10px;

  /* EasyMint/Input Label */

  font-family: "Courier";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  /* identical to box height, or 71% */

  letter-spacing: 0.04em;

  color: #a6bdc9;
`;
