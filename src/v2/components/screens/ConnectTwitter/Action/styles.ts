import { PrimaryButton } from "src/v2/components/Styles/Button";
import { FlexColumn, FlexRow } from "src/v2/components/Styles/Layout";
import { Paragraph } from "src/v2/components/Styles/Typography";
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

export const ContentWrapper = styled(FlexColumn)`
  margin: 75px 48px 0;
`;

export const DetailSection = styled(FlexColumn)`
  margin-top: 48px;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
`;

export const HighlightedText = styled.span`
  color: #0088ff;
`;

export const TwitterMessage = styled.div`
  padding: 7px 8px;

  background: #0088ff;
  border-radius: 4px;
  color: white;
`;

export const SubmitButton = styled(PrimaryButton)`
  margin-top: 40px;
`;

export const LinkInfoText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 496;
  font-size: 14px;
  line-height: 24px;
  /* or 150% */

  margin: 40px 0;

  letter-spacing: -0.005em;

  color: #81a2b1;
`;

export const WalletConnectText = styled(Paragraph)`
  font-size: inherit;
  margin: 0;
`;

export const OrderedList = styled.ol`
  margin: 0;
  padding-left: 14px;
`;

export const ButtonSection = styled(FlexRow)`
  border-bottom: 2px solid #1f2c32;
  width: 100%;
`;

export const ConnectButton = styled.button<{ active?: boolean }>`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 14px 32px;

  color: ${({ active }) => (active ? "#131516" : "#C0D0D8")};
  background: ${({ active }) => (active ? "#F2F6F7" : "#171a1c")};
  border: 1px solid rgba(62, 88, 101, 0.7);
  border-radius: 4px 4px 0px 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 934;
  font-size: 14px;
  line-height: 12px;
  /* identical to box height, or 75% */

  text-align: center;
  letter-spacing: 0.0025em;
`;
