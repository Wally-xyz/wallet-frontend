import styled from "styled-components";
import { EasyMintLogo as _EasyMintLogo } from "../../EasyMintLogo";
import { Whale as _Whale } from "../../Whale";
import { ButtonLink } from "../../Button";

export const Button = styled(ButtonLink)`
  padding: 24px 48px;
  background: #f2f6f7;
  border: 1px solid #fcfdfd;
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.0125em;
  color: #0a0a0b;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Container = styled.article`
  width: 100%;
  height: 100%;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(18, 21, 23, 0.92) 0%,
      rgba(5, 5, 5, 0.98) 100%
    ),
    url("/landing_background.png");
  background-repeat: repeat;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #C0D0D8;
  margin: 32px auto 48px;
  max-width: 440px;

  @media (max-width: 940px) {
    text-align: center;
  }
`;

export const TwitterInfo = styled.div`
  margin-top: 32px;
  max-width: 328px;
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.0125em;
  color: #f2f6f7;
`;

export const TwitterBlueText = styled.span`
  color: #0088ff;
`;

export const Tagline = styled.div`
  //styleName: EasyMint/H1;
  font-family: "Merriweather", serif;
  font-weight: 500;
  font-size: 40px;
  font-weight: 934;
  line-height: 56px;
  letter-spacing: 0.0025em;
  text-align: center;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const FooterHeading = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 8px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-right: 15px;
  color: #d9e3e8;
`;

export const FooterText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.0025em;
  margin-left: 24px;

  color: #dfe8ec;
`;
