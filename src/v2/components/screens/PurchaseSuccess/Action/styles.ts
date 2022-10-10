import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { TinyText } from "src/v2/components/Styles/Typography";
import styled from "styled-components";
import { PrimaryButton } from "src/v2/components/Styles/Button";

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

export const ContentWrapper = styled(FlexColumn)`
  margin: 8px 48px 0;
`;

export const Image = styled.img`
  width: 450px;
  height: auto;
  border: 1px solid #222b2f;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;
  margin-top: 32px;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 48px;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

export const TwitterButtonText = styled.span`
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 12px;
  margin-left: 12px;
  text-align: center;
  letter-spacing: 0.0025em;
  color: #0a0a0b;
`;

export const OpenSeaButton = styled(PrimaryButton)`
  background-color: #0088ff;
  border: 1px solid #0088ff;

  span {
    color: white;
  }
`;

export const TwitterText = styled(TinyText)`
  margin-top: 16px;
`;

export const HighlightedText = styled.span`
  color: #0088ff;
`;
