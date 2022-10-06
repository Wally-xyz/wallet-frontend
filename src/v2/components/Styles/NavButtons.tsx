import * as React from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "src/v2/icons/LeftArrow";
import { RightArrow } from "src/v2/icons/RightArrow";
import styled from "styled-components";

const LinkButton = styled(Link)<{ dir: string }>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 12px;
  text-align: right;
  letter-spacing: 0.0025em;
  color: #e6ecef;
  text-decoration: none;
  margin-right: ${({ dir }) => (dir === "right" ? "16px" : 0)};
  margin-left: ${({ dir }) => (dir === "left" ? "16px" : 0)};
  display: flex;
  align-items: center;
`;

const NextStepText = styled.div`
  margin-right: 8px;
`;

const PrevStepText = styled.div`
  margin-left: 8px;
`;

export function NextStepButton({ to }: { to: string }) {
  return (
    <LinkButton to={to || "/"} dir="right">
      <NextStepText>Next</NextStepText>
      <RightArrow />
    </LinkButton>
  );
}

export function PrevStepButton({ to }: { to: string }) {
  return (
    <LinkButton to={to || "/"} dir="left">
      <LeftArrow />
      <PrevStepText>Go Back</PrevStepText>
    </LinkButton>
  );
}
