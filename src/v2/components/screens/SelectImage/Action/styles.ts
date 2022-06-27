import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { CourierText, Heading2, TextLight } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

import { Input as _Input } from "../../../Input";

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  background: #121517;
  padding: 48px 0;
`;

export const SubTitle = styled(Heading2)`
  width: 475px;
`;

export const ImageTitle = styled(CourierText)`
  margin-bottom: 12px;
`;

export const ImageSubTitle = styled(TextLight)`
  margin-top: 12px;
  width: 74px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin-top: 100px;
`;

export const ImageWrapper = styled(FlexColumn)`
  align-items: flex-start;
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const ImageSection = styled(FlexRow)`
  margin-top: 64px;
  align-items: baseline;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 64px;
  justify-content: space-between;
`;
