import { PrimaryButton } from "src/v2/components/Styles/Button";
import { Input } from "src/v2/components/Styles/Input";
import { FlexColumn } from "src/v2/components/Styles/Layout";
import { Heading3 } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  background: #121517;
  padding: 48px 0;
  position: fixed;
  left: 0;
  top: 0;
`;

export const EmailInput = styled(Input)``;

export const SubTitle = styled(Heading3)`
  width: 416px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin-top: 100px;
`;

export const EmailInputWrapper = styled(FlexColumn)`
  margin-top: 64px;
  align-items: flex-start;
  width: 392px;
`;

export const SubmitButton = styled(PrimaryButton)`
  margin-top: 32px;
  align-self: flex-end;
`;
