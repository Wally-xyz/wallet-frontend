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

export const Title = styled.h1`
  /* EasyMint/H1 */

  font-family: "New York";
  font-style: normal;
  font-weight: 934;
  font-size: 40px;
  line-height: 56px;
  /* identical to box height, or 140% */

  text-align: center;
  letter-spacing: 0.0025em;

  color: #e6ecef;
`;

export const SubTitle = styled.div`
  width: 416px;
  height: 64px;

  /* EasyMint/H2 */

  font-family: "New York";
  font-style: normal;
  font-weight: 496;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-align: center;
  letter-spacing: -0.005em;

  color: #c0d0d8;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
