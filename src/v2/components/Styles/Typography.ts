import styled from "styled-components";

export const Heading1 = styled.h1`
  /* EasyMint/H1 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 934;
  font-size: 40px;
  line-height: 56px;
  /* identical to box height, or 140% */

  text-align: center;
  letter-spacing: 0.0025em;

  color: #e6ecef;
`;

export const Heading2 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 36px;
  /* identical to box height, or 138% */

  letter-spacing: 0.0025em;

  color: #dce2e5;
`;

export const Heading3 = styled.h3<{ align?: string }>`
  /* EasyMint/H2 */

  font-family: "Inter";
  font-style: normal;
  font-weight: 496;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-align: ${({ align }) => align || "center"};
  letter-spacing: -0.005em;

  color: #c0d0d8;
`;

export const Heading5 = styled.h5`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 8px;
  /* identical to box height, or 57% */

  letter-spacing: 0.4em;
  text-transform: uppercase;

  color: #7d95a1;
`;

export const CourierText = styled.div`
  font-family: "Courier";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  /* identical to box height, or 71% */

  letter-spacing: 0.04em;

  color: #8dabb9;
`;

export const TextLight = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 496;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  color: #c0d0d8;
`;

export const Paragraph = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.0025em;

  color: #d9e3e8;
`;
