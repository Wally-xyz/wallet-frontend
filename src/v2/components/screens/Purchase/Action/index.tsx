import * as React from "react";

import { BackButton } from "src/v2/components/Styles/BackButton";
import { EasyMintLogo } from "src/v2/components/EasyMintLogo";
import { Heading1, Heading3 } from "src/v2/components/Styles/Typography";

import {
  ButtonSection,
  ConfirmButton,
  Container,
  ContentWrapper,
  PaymentRow,
  PaymentSection,
} from "./styles";
import { useStripeContext } from "src/context/stripe";

export function Action() {
  const { paymentElement, handleSubmit } = useStripeContext();

  React.useEffect(() => {
    if (!paymentElement) {
      return;
    }
    paymentElement.mount("#payment-element");
  }, [paymentElement]);

  return (
    <Container>
      <EasyMintLogo />
      <ContentWrapper>
        <Heading1>Purchase NFT</Heading1>
        <Heading3 align="center" width="80%">
          Enter payment details to purchase your NFT.
        </Heading3>
        <PaymentSection>
          <form id="payment-form">
            <div id="payment-element">
              {/* <!--Stripe.js injects the Payment Element--> */}
              <div className="spinner" id="placeholder-spinner" />
            </div>
            <PaymentRow>
              <ConfirmButton id="submit" width="100%" onClick={handleSubmit}>
                <div className="spinner hidden" id="spinner" />
                <span id="button-text">Confirm</span>
              </ConfirmButton>
            </PaymentRow>
            <div id="payment-message" className="hidden" />
          </form>
        </PaymentSection>
        <ButtonSection>
          <BackButton />
        </ButtonSection>
      </ContentWrapper>
    </Container>
  );
}
