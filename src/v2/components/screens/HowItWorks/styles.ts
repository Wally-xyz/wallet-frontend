import styled from "styled-components";
import { Link } from "react-router-dom";

import { EasyMintLogo as _EasyMintLogo } from "../../EasyMintLogo";
import { Whale as _Whale } from "../../Whale";

export const Container = styled.article`
  height: 100%;
  width: 100%;
  background: #1a1533;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(18, 21, 23, 0.92) 0%,
    rgba(5, 5, 5, 0.98) 100%
  );
`;

export const TitleWrapper = styled.div`
  align-self: baseline;
  margin-left: 48px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 45%;
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

export const Title = styled.h1`
  height: 56px;

  /* Wally/H1 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 56px;
  /* identical to box height, or 140% */

  letter-spacing: 0.0025em;
  margin: 0.1em 0;
  color: #f2f6f7;
`;

export const SubTitle = styled.div`
  height: 64px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  letter-spacing: 0.0025em;

  color: #c0d0d8;
`;

export const BackButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 12px;

  width: 143px;
  height: 48px;

  background: #1a1533;
  border: 1px solid #f2f6f7;
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;

  font-family: "New York";
  font-style: normal;
  font-weight: 810;
  font-size: 16px;
  line-height: 12px;
  /* identical to box height, or 75% */

  text-align: center;
  letter-spacing: 0.0125em;
  text-decoration: none;

  color: #f2f6f7;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
  width: 100%;
  justify-content: flex-end;
  margin-right: 64px;
`;

export const StartDemoButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 12px;

  width: 254px;
  height: 48px;
  margin-left: 32px;

  background: #f2f6f7;
  border: 1px solid #fcfdfd;
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "New York";
  font-style: normal;
  font-weight: 810;
  font-size: 16px;
  line-height: 12px;
  /* identical to box height, or 75% */

  text-align: center;
  letter-spacing: 0.0125em;

  color: #0a0a0b;
`;
