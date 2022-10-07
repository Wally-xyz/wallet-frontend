import { Heading3 } from "src/v2/components/Styles/Typography";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  width: 50%;
  max-width: 1080px;
  position: absolute;
  right: 0;
  top: 0;
  background: #1a1533;

  @media (max-width: 1124px) {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`;

export const TopBarWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 50%;
  height: 64px;
  right: 0px;
  top: 0px;
  background: #1a1533;
  border-bottom: 1px solid rgba(252, 253, 253, 0.08);
`;

export const Content = styled.div`
  margin: 96px 32px 80px;
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

export const ApiTitle = styled(Heading3)`
  margin-top: 24px;
  text-align: left;
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
  width: 100px;
`;

export const Highlightor = styled.div`
  width: 100px;
  height: 4px;
  margin-left: 100px;

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
  max-width: 1080px;
`;
