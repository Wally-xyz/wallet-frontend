import styled from "styled-components";

import { EasyMintLogo as _EasyMintLogo } from "../../EasyMintLogo";
import { FlexColumn } from "../../Styles/Layout";
import { Whale as _Whale } from "../../Whale";

export const Container = styled(FlexColumn)`
  box-sizing: border-box;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #1a1533;
`;

export const TopNavWrapper = styled(FlexColumn)`
  width: 98%;
  margin-right: 64px;
  margin-left: 32px;
`;

export const TitleWrapper = styled(FlexColumn)`
  align-self: baseline;
  align-items: flex-start;
  position: absolute;
  max-width: 504px;
  top: 8px;
  left: 32px;
  padding: 0;
`;

export const Message = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-top: 28px;
  width: 60%;

  @media (max-width: 940px) {
    text-align: center;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  right: 32px;
  bottom: 32px;
  margin: 0;
  button {
    margin-right: 24px;
  }
`;
