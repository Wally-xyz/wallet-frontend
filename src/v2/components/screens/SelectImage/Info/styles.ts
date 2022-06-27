import { Link } from "react-router-dom";
import { Heading3 } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  width: 50%;
  background: #1a1533;
`;

export const TopBarWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  gap: 16px;

  width: 100%;
  height: 80px;
  right: 0px;
  top: 0px;

  background: #1a1533;
  border-bottom: 1px solid rgba(252, 253, 253, 0.08);
`;

export const Content = styled.div`
  margin-top: 48px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const StepTitle = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 8px;
  /* identical to box height, or 57% */

  letter-spacing: 0.4em;
  text-transform: uppercase;

  color: #7d95a1;
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

export const CodeBlockTitle = styled(Heading3)`
  margin-top: 48px;
  text-align: left;
`;

export const Separator = styled.div`
  background: rgba(252, 253, 253, 0.08);
  border-radius: 1px;
  height: 2px;
`;

export const OptionsWrapper = styled.div`
  margin-top: 32px;
  display: flex;
`;

export const Option = styled.div`
  padding-bottom: 16px;
  text-align: center;
  width: 160px;
`;

export const Highlightor = styled.div`
  width: 160px;
  height: 4px;

  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%);
  border-radius: 4px 4px 0px 0px;
`;

export const Footer = styled.footer`
  height: 64px;

  background: #1a1533;
  border-top: 1px solid rgba(252, 253, 253, 0.08);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 200px;
`;

export const NextStepButton = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 12px;
  /* identical to box height, or 86% */

  text-align: right;
  letter-spacing: 0.0025em;

  color: #e6ecef;
  text-decoration: none;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

export const NextStepText = styled.div`
  margin-right: 8px;
`;
