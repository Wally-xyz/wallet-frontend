import { QRCodeScanner } from "src/v2/components/QRCodeScanner";
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
  margin: 8px 48px 0;
`;

export const DetailSection = styled(FlexColumn)`
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
  margin-top: 16px;
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
  color: inherit;
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
  cursor: pointer;
  border-bottom: none;
`;

export const WhiteText = styled.span`
  color: #e6ecef;
`;

export const StepLabel = styled.div`
  font-family: "Courier";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  /* identical to box height, or 71% */

  letter-spacing: 0.04em;

  color: #8dabb9;
`;

export const StepText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 568;
  font-size: 12px;
  line-height: 16px;
  /* or 133% */
  height: 32px;
  color: #81a2b1;
  width: 100px;
`;

export const Step5Text = styled(StepText)`
  width: 60%;
  text-align: center;
`;

export const Step = styled(FlexColumn)`
  margin-top: 16px;
`;

export const Scanner = styled(QRCodeScanner)`
  height: 100%;
  width: 100%;
  background: white;
`;

export const ScannerTitle = styled.div`
  position: absolute;
  width: 100%;
  color: rgb(18, 21, 23);
  bottom: 24px;
  text-align: center;
`;

export const Step5Wrapper = styled.div`
  background: #090a0b;
  border: 1px solid #222b2f;
  box-shadow: 0px 8px 0px -4px #090a0b;
  border-radius: 4px;
  margin-top: 5px;
  cursor: pointer;
`;

export const Step5Inner = styled.div`
  background: rgba(107, 134, 148, 0.12);
  border: 2px dashed #c0d0d8;
  height: 352px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
