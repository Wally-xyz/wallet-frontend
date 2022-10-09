import * as React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "./Spinner";

export const PrimaryButton = ({ width, loading, ...rest }: any) => {
  return (
    <ButtonWrapper style={{ width }}>
      {loading && <StyledSpinner />}
      <PrimaryStyledButton {...rest} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  height: 50px;
`;

const StyledSpinner = styled(Spinner)`
  transform: scale(0.2);
  margin-top: -32px;
  margin-right: -75px;
`;

export const SecondaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  height: 48px;
  background: transparent;
  border: 1px solid hsl(200, 24%, 64%);
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.0125em;
  text-decoration: none;
  color: hsl(200, 24%, 96%);

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid hsl(200, 24%, 96%);
  }
`;

const PrimaryStyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 12px;
  height: 48px;
  background: hsl(200, 24%, 84%);
  border: 1px solid hsl(200, 24%, 84%);
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 12px;
  cursor: pointer;
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

export const PrimaryLinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 36px;
  gap: 12px;
  height: 48px;
  background: hsl(200, 24%, 84%);
  border: 1px solid hsl(200, 24%, 84%);
  box-shadow: 0px 8px 0px -4px #030303;
  border-radius: 4px;
  font-family: "Merriweather", serif;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 12px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
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
