import * as React from "react";

import { BackButton } from "src/v2/components/Styles/BackButton";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";
import { Input } from "src/v2/components/Styles/Input";

import {
  ButtonSection,
  ConfirmButton,
  Container,
  ContentWrapper,
  PaymentRow,
  PaymentSection,
} from "./styles";
import { Separator } from "src/v2/components/Styles/Layout";

export function Action() {
  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Purchase NFT</Heading1>
        <Heading3 align="center">Enter payment details to purchase your NFT.</Heading3>
        <PaymentSection>
          <PaymentRow>
            <Input label="Card Number" placeholder="XXXX XXXX XXXX XXXX" />
          </PaymentRow>
          <PaymentRow>
            <Input label="Expiration" placeholder="MM/YY" />
            <Separator />
            <Input label="CVC" placeholder="123" />
          </PaymentRow>
          <PaymentRow>
            <Input label="Country" placeholder="United States" />
            <Separator />
            <Input label="Zip Code" placeholder="90210" />
          </PaymentRow>
          <PaymentRow>
            <ConfirmButton>Confirm</ConfirmButton>
          </PaymentRow>
        </PaymentSection>
        <ButtonSection>
          <BackButton />
        </ButtonSection>
      </ContentWrapper>
    </Container>
  );
}
