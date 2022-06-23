import styled from "styled-components";
import { EasyMintLogo as _EasyMintLogo } from "../../EasyMintLogo";
import { Whale as _Whale } from "../../Whale";
import { ButtonLink } from "../../Button";

export const Button = styled(ButtonLink)`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 48px;
  gap: 12px;

  width: 217px;
  height: 60px;

  background: #f2f6f7;
  border: 1px solid #fcfdfd;
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 12px;
  /* identical to box height, or 60% */

  text-align: center;
  letter-spacing: 0.0125em;

  color: #0a0a0b;
`;

export const Center = styled.div`
  margin-top: 200px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Container = styled.article`
  height: 100%;
  width: 100%;
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
  justify-content: flex-start;
`;

export const EasyMintLogo = styled(_EasyMintLogo)`
  width: 137.48px;
  height: 32px;
`;

export const EasyMintLogoWrapper = styled.div`
  align-self: baseline;
  margin-left: 48px;
  display: flex;
  align-items: center;
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

export const TwitterInfo = styled.div`
  margin-top: 32px;
  width: 50%;
  height: 48px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 568;
  font-size: 12px;
  line-height: 24px;
  /* or 171% */

  text-align: center;
  letter-spacing: 0.0125em;

  color: #f2f6f7;
`;

export const TwitterBlueText = styled.span`
  color: #0088ff;
`;

export const Tagline = styled.div`
  //styleName: EasyMint/H1;
  font-family: "Inter";
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

export const FooterHeading = styled.h5`
  height: 8px;

  /* Wally/H5 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 8px;
  /* identical to box height, or 67% */

  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-right: 15px;

  color: #d9e3e8;
`;

export const FooterText = styled.span`
  width: 45%;
  height: 48px;

  /* Wally/Paragraph */

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

export const DemoBadge = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 10px 7px;
  gap: 8px;

  height: 24px;

  background: #334047;
  border-radius: 6px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 11px;
  /* identical to box height, or 73% */

  color: #f2f6f7;

  text-shadow: 0px 1px 0px rgba(19, 21, 22, 0.48);

  margin-left: 8px;
`;
