import styled from "styled-components";
import { EasyMintLogo as _EasyMintLogo } from "../../EasyMintLogo";
import { Whale as _Whale } from "../../Whale";
import { ButtonLink } from "../../Button";

export const Button = styled(ButtonLink)`
  padding: 24px 48px;
  background: hsl(200, 24%, 84%);
  border: 1px solid hsl(200, 24%, 84%);
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.0125em;
  color: #0a0a0b;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover {
    cursor: pointer;
    background: hsl(200, 24%, 96%);
  }
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
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.5%;
  color: #C0D0D8;
  margin: 16px auto 40px;
  padding: 0 32px;
  max-width: 544px;
`;

export const TwitterInfo = styled.div`
  margin-top: 24px;
  max-width: 280px;
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.0125em;
  color: #f2f6f7;
`;

export const TwitterBlueText = styled.span`
  color: #0088ff;
`;

export const Tagline = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 900;
  font-size: 38px;
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

export const IntroFooter = styled.footer`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 576px;

  svg {
    width: 60px;
    height: 20px;
  }

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const PoweredBy = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1080px) {
    margin-bottom: 12px;
  }
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

export const FooterHeading = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 8px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-right: 8px;
  color: #d9e3e8;
`;

export const FooterText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  max-width: 360px;
  letter-spacing: 0.0025em;
  margin-left: 24px;

  color: #dfe8ec;
`;
