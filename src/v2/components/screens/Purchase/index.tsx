import * as React from "react";
import styled from "styled-components";

import { Chrome } from "../../Chrome";
import { Button } from "../../Button";
import { ImagePreview } from "../../ImagePreview";
import { WalletFunding } from "../../tips/WalletFunding";

const Container = styled.article`
  box-sizing: border-box;
  max-width: 1200px;
  padding: 40px;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: grid;
  gap: 80px;
  grid-template-columns: 400px 1fr;
`;

const Disclaimer = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weigt: 400;
  opacity: 0.5;
`;

const ImageTitle = styled.div`
  color: #fffff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
`;

const Submit = styled(Button)`
  margin-bottom: 16px;
  margin-top: 56px;
`;

const Title = styled.header`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 16px;
`;

interface Props {
  imageUrl: string;
  name: string;
  onSubmit(): void;
}

export function Purchase(props: Props) {
  return (
    <Chrome footer={<WalletFunding />}>
      <Container>
        <Content>
          <div>
            <ImageTitle>{props.name}</ImageTitle>
            <ImagePreview imageUrl={props.imageUrl} />
          </div>
          <div>
            <Title>💰We’ll also need $100 bucks, thanks.</Title>
            <Disclaimer>
              Minting your NFT writes the image to the blockchain and gives you verifiable
              ownership. This costs ETH, so we’ll collect $100 to cover the minting fees.
            </Disclaimer>
            <Submit onClick={props.onSubmit}>Purchase for $100</Submit>
            <Disclaimer>You’ll be taken to Stripe for a secure payment.</Disclaimer>
          </div>
        </Content>
      </Container>
    </Chrome>
  );
}
