<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 4b20f82275a64545347e03cf043b822e2a2cfa03
import styled from "styled-components";

export const SecondaryButton = styled.button`
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

  &:hover {
    transform: scale(1.05);
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 12px;

<<<<<<< HEAD
  height: 48px;

  background: #f2f6f7;
  border: 1px solid #fcfdfd;
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "New York";
  font-style: normal;
  font-weight: 810;
  font-size: 16px;
  line-height: 12px;
  cursor: pointer;
  /* identical to box height, or 75% */

  text-align: center;
  letter-spacing: 0.0125em;

  color: #0a0a0b;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PrimaryLinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 12px;

  height: 48px;
=======
  width: 254px;
  height: 48px;
  margin-left: 32px;
>>>>>>> 4b20f82275a64545347e03cf043b822e2a2cfa03

  background: #f2f6f7;
  border: 1px solid #fcfdfd;
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "New York";
  font-style: normal;
  font-weight: 810;
  font-size: 16px;
  line-height: 12px;
  cursor: pointer;
  /* identical to box height, or 75% */

  text-align: center;
  letter-spacing: 0.0125em;

  color: #0a0a0b;

  &:hover {
    transform: scale(1.05);
  }
`;
