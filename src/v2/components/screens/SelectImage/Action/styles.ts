import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { CourierText, TextLight } from "src/v2/components/Styles/Typography";
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

export const ImageTitle = styled(CourierText)`
  margin-bottom: 12px;
`;

export const ImageSubTitle = styled(TextLight)`
  margin-top: 12px;
  width: 74px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin: 8px 48px 0;
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

export const ImageContainer = styled.button<{ selected?: boolean }>`
  display: flex;
  min-height: 120px;
  background: none;
  margin: 0;
  border: none;
  padding: 0;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `outline: 4px solid #c0d0d8;
    outline-offset: 5px;
  `}
`;

export const ImageSection = styled(FlexColumn)`
  margin-top: 64px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 64px;
  justify-content: space-between;
  width: 100%;
`;
