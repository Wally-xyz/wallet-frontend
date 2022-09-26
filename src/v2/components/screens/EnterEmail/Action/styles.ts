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

export const SubTitle = styled(Heading3)`
  width: 416px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin-top: 100px;
`;

export const InputWrapper = styled(FlexColumn)`
  margin-top: 64px;
  align-items: flex-start;
  width: 392px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-self: flex-end;
  align-items: center;
`;
