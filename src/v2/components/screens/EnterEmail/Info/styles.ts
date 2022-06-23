import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
  max-width: 1000px;
  width: 50%;
  background: #1a1533;
`;

export const TopBarWrapper = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  gap: 16px;

  width: 100%;
  height: 80px;
  right: 0px;
  top: 0px;

  background: #1a1533;
  border-bottom: 1px solid rgba(252, 253, 253, 0.08);
`;

export const Content = styled.div`
  margin-top: 48px;
  margin-left: 40px;
`;

export const StepTitle = styled.h5`
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

export const SignupMethodTitle = styled.div`
  height: 32px;
  left: 0px;
  top: 32px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  /* identical to box height, or 145% */

  letter-spacing: 0.0025em;

  color: #dce2e5;

  margin-top: 24px;
`;
