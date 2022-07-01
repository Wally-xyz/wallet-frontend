import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import styled from "styled-components";
import { PrimaryButton } from "src/v2/components/Styles/Button";

import { Input as _Input } from "../../../Input";

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  background: #121517;
  padding: 48px 0;
  position: fixed;
  left: 0;
  top: 0;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin: 48px 48px 0;
`;

export const ConfirmButton = styled(PrimaryButton)`
  width: 100%;
`;

export const PaymentSection = styled(FlexRow)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;

  width: 392px;
  height: 392px;

  background: #090a0b;
  border: 1px solid #222b2f;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;

  margin-top: 24px;
  padding: 40px;
`;

export const PaymentRow = styled(FlexRow)`
  justify-content: flex-start;
  width: 100%;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 64px;
  justify-content: flex-start;
  width: 392px;
`;
