import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const commonStyles = css<{ disabled?: boolean }>`
  background: linear-gradient(87.18deg, #32adf0 -15.08%, #ff00fe 107.47%);
  border-radius: 100px;
  box-shadow: 0px 6.384615421295166px 31.923076629638672px 0px #f262ff80;
  color: #ffffff;
  display: inline-block;
  font-size: 28px;
  font-weight: 700;
  padding: 11px 60px 13px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${props =>
    props.disabled
      ? `
    cursor: not-allowed;
    opacity: 0.5;
  `
      : ""}
`;

export const Gradient = styled.button`
  ${commonStyles}
`;

export const GradientLink = styled(Link)<{ disabled?: boolean }>`
  ${commonStyles}
  text-decoration: none;
`;
