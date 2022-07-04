import styled from "styled-components";

export const FlexColumn = styled.div<{ align?: string; width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "auto"};
`;

export const FlexRow = styled.div<{ align?: string; justify?: string; width?: string }>`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "auto"};
`;

export const Separator = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "24px"};
  min-width: ${({ width }) => width || "24px"};
`;
