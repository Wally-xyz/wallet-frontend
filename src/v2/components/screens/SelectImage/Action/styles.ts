import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { CourierText, Heading3, TextLight } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

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

export const SubTitle = styled(Heading3)`
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
  margin: 75px 48px 0;
`;

export const ImageWrapper = styled(FlexColumn)`
  align-items: flex-start;

  &:not(:last-of-type) {
    margin-right: 24px;
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;

  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;
`;

export const ImageContainer = styled(FlexColumn)`
  min-height: 120px;
`;

export const ImageSection = styled(FlexRow)`
  margin-top: 64px;
  align-items: baseline;
  width: 100%;
  justify-content: center;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 64px;
  justify-content: space-between;
  width: 100%;
`;
