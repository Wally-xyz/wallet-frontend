import { FlexColumn } from "src/v2/components/Styles/Layout";
import { Heading3 } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  max-width: 1080px;
  min-height: 100%;
  background: #121517;
  padding: 48px 32px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;

  @media (max-width: 1124px) {
    width: 100%;
    padding: 24px;
  }

  @media (min-width: 2160px) {
    width: calc(100% - 1080px);
    max-width: none;
  }

`;

export const SubTitle = styled(Heading3)`
  max-width: 416px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin-top: 64px;
`;

export const InputWrapper = styled(FlexColumn)`
  margin-top: 64px;
  align-items: flex-start;
  width: 100%;
  max-width: 416px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-self: flex-end;
  align-items: center;
`;
