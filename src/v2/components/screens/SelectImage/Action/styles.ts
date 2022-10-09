import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { CourierText, TextLight } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

import { Input as _Input } from "../../../Input";

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
  padding: 0;
  border-radius: 6px;
  display: flex;
  min-height: 120px;
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
