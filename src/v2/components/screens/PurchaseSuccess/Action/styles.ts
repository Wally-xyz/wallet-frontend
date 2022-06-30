import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { Heading3, TinyText } from "src/v2/components/Styles/Typography";
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

export const SubTitle = styled(Heading3)`
  text-align: center;
  width: 475px;
`;

export const ContentWrapper = styled(FlexColumn)`
  margin: 75px 48px 0;
`;

export const MainSection = styled(FlexColumn)``;

export const Dronie = styled.img`
  width: auto;
  height: 384px;
  border: 1px solid #222b2f;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;
`;

export const ButtonSection = styled(FlexRow)`
  margin-top: 48px;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

export const TwitterButtonText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 934;
  font-size: 14px;
  line-height: 12px;
  margin-left: 12px;
  /* identical to box height, or 75% */

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
