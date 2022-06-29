import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { CourierText, Heading3, TextLight } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

import { Input as _Input } from "../../../Input";

export const Container = styled.div`
  width: 50%;
  min-height: 100%;
  background: #121517;
  padding: 48px 0;
`;

export const SubTitle = styled(Heading3)`
  text-align: center;
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
  margin: 100px 48px 0;
`;

export const ImageWrapper = styled(FlexColumn)`
  align-items: flex-start;
`;

export const ImageSection = styled(FlexRow)`
  margin-top: 64px;
  align-items: baseline;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 64px;
  justify-content: space-between;
  width: 100%;
`;
