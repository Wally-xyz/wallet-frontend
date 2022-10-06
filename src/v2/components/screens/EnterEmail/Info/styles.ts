import { FlexRow } from "src/v2/components/Styles/Layout";
import { Heading3 } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  width: 50%;
  margin-left: 50%;
  background: #1a1533;
`;

export const TopBarWrapper = styled(FlexRow)`
  position: fixed;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0px 32px;
  gap: 16px;
  width: 50%;
  height: 80px;
  right: 0px;
  top: 0px;
  background: #1a1533;
  border-bottom: 1px solid rgba(252, 253, 253, 0.08);
`;

export const Content = styled.div`
  margin: 120px 32px 80px;
`;

export const SignupText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.0025em;

  color: #d9e3e8;
  margin-top: 64px;
`;

export const Separator = styled.div`
  background: rgba(252, 253, 253, 0.08);
  border-radius: 1px;
  height: 2px;
`;

export const OptionsWrapper = styled(FlexRow)`
  margin-top: 32px;
`;

export const Option = styled.div`
  padding-bottom: 16px;
  text-align: center;
  width: 33%;
`;

export const Highlightor = styled.div`
  width: 33%;
  height: 4px;

  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%);
  border-radius: 4px 4px 0px 0px;
`;

export const Footer = styled.footer`
  height: 48px;
  background: #1a1533;
  border-top: 1px solid rgba(252, 253, 253, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;
`;

export const IntroFooter = styled.footer`
  width: 100%;
  background: transparent;
`;

export const ApiTitle = styled(Heading3)`
  margin-top: 24px;
  text-align: left;
`;
