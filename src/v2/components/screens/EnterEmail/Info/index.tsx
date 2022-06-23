import * as React from "react";
import { TopNav } from "src/v2/components/TopNav";
import { Illustration } from "./Illustration";

import {
  APICallTitle,
  Container,
  Content,
  SignupMethodSubtitle,
  SignupMethodTitle,
  StepTitle,
  TopBarWrapper,
  SignupText,
} from "./styles";

export function Info() {
  return (
    <Container>
      <TopBarWrapper>
        <TopNav variant="SMALL" />
      </TopBarWrapper>
      <Content>
        <StepTitle>Step 1</StepTitle>
        <SignupMethodTitle>Signup Methods</SignupMethodTitle>
        <SignupMethodSubtitle>Wally API Process</SignupMethodSubtitle>
        <Illustration />
        <SignupText>
          Placeholder text to demonstrate what Wally will be doing in the background here, as well
          as let users know which option(s) are available to them in the API with each of these
          types of signup methods.
        </SignupText>
        <APICallTitle>API Call</APICallTitle>
      </Content>
    </Container>
  );
}
