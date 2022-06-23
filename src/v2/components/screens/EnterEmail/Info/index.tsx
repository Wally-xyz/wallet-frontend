import * as React from "react";
import { TopNav } from "src/v2/components/TopNav";

import { Container, Content, SignupMethodTitle, StepTitle, TopBarWrapper } from "./styles";

export function Info() {
  return (
    <Container>
      <TopBarWrapper>
        <TopNav variant="SMALL" />
      </TopBarWrapper>
      <Content>
        <StepTitle>Step 1</StepTitle>
        <SignupMethodTitle>Signup Methods</SignupMethodTitle>
      </Content>
    </Container>
  );
}
