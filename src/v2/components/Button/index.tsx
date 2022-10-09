import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const commonStyles = css<{ disabled?: boolean }>`
  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%);
  border-radius: 100px;
  box-shadow: 0px 6.384615421295166px 31.923076629638672px 0px #f262ff80;
  cursor: pointer;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 28px;
  font-weight: 700;
  padding: 12px 60px;
  transition: transform 0.15s;

  &:hover,
  &:focus {
    ${props =>
      !props.disabled &&
      `
    `}
  }

  &:active {
    ${props =>
      !props.disabled &&
      `
    `}
  }

  ${props =>
    props.disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
  `
      : ""}
`;

export const Button = styled.button`
  ${commonStyles}
`;

export const ButtonLink = styled(Link)<{ disabled?: boolean }>`
  ${commonStyles}
  text-decoration: none;
`;
