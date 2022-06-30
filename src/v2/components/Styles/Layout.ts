import styled from "styled-components";

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = styled.div<{ justify?: string; width?: string }>`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: center;
  width: ${({ width }) => width || "auto"};
`;

export const Separator = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "24px"};
`;
