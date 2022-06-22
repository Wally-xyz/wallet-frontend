import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 32px 32px 0 0;
`;

export const IconWrapper = styled.span`
  margin-left: 10px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  color: #cec6d2;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  height: 12px;
  line-height: 12px;
  margin-right: 32px;
  text-decoration: none;
  letter-spacing: 0.0025em;
`;

export const NavRouterLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #cec6d2;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  height: 12px;
  line-height: 12px;
  margin-right: 32px;
  text-decoration: none;
  letter-spacing: 0.0025em;
`;
