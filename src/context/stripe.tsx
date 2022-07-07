import React, { createContext, useContext, useEffect, useState } from "react";
import { loadStripe, Stripe, StripeElements, StripePaymentElement } from "@stripe/stripe-js";
// import { API_URL } from "src/constants";

interface Appearence {
  theme: "none" | "stripe" | "night" | "flat" | undefined;
}

function setLoading(isLoading: boolean) {
  const submitButton = document.querySelector("#submit");
  const spinner = document.querySelector("#spinner");
  const buttonText = document.querySelector("#button-text");
  if (isLoading) {
    // Disable the button and show a spinner
    if (submitButton) {
      (submitButton as any).disabled = true;
    }
    if (spinner) {
      spinner.classList.remove("hidden");
    }
    if (buttonText) {
      buttonText.classList.add("hidden");
    }
  } else {
    if (submitButton) {
      (submitButton as any).disabled = false;
    }
    if (spinner) {
      spinner.classList.add("hidden");
    }
    if (buttonText) {
      buttonText.classList.remove("hidden");
    }
  }
}

export const StripeContext = createContext<{
  paymentElement: StripePaymentElement | undefined;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}>({
  paymentElement: undefined,
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  },
});

export const StripeContextProvider: React.FC<{
  children: JSX.Element;
  authToken: string;
}> = props => {
  const [paymentElement, setPaymentElement] = useState<StripePaymentElement | undefined>();
  const [stripe, setStripe] = useState<Stripe | undefined>();
  const [elements, setElements] = useState<StripeElements | undefined>();

  useEffect(() => {
    if (!props.authToken) {
      return;
    }
    (async () => {
      try {
        const stripe = await loadStripe(
          "pk_test_TYooMQauvdEDq54NiTphI7jx",
          // "pk_live_51KYuRoBRQJlh59705jjvpcRVnOUgFLVOjwhqV6AG7KxMWAFDjIH0RkSXmHiUIhOzxcq4UdbbDPSfbH26fRLfNYNZ00iHsLUJ4m",
        );
        if (!stripe) {
          return;
        }
        setStripe(stripe);
        // const response = await fetch(`${API_URL}/payments/create-payment-intent`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${props.authToken}`,
        //   },
        // });
        // console.log(response);
        const clientSecret = "pi_1DrN4m2eZvKYlo2CKBqFUrrP_secret_xNxliwI8gmjiBZa8zHamATHbl";
        // const { clientSecret } = await response.json();
        const appearance: Appearence = {
          theme: "night",
        };
        const elementObjects = stripe.elements({ appearance, clientSecret });
        setElements(elementObjects);

        const paymentElm = elementObjects.create("payment");
        setPaymentElement(paymentElm);
      } catch (exp) {
        console.log("exp = ", exp);
      }
    })();
  }, [props.authToken]);

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    if (!stripe || !elements) {
      return;
    }
    e.preventDefault();
    setLoading(true);

    await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/purchase-success",
      },
    });

    setLoading(false);
  }

  return (
    <StripeContext.Provider value={{ paymentElement, handleSubmit }}>
      {props.children}
    </StripeContext.Provider>
  );
};

export const useStripeContext = () => {
  return useContext(StripeContext);
};
