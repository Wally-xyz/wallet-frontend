import * as React from "react";
import styled from "styled-components";
import { SSButton as SButton } from "./Button";
import { API_URL } from "../constants/default";

interface Props {
    authToken: string;
    onComplete: () => void;
}

const SSButton = styled(SButton)`
    &:hover {
        color: white;
    }
`

const Mint = (props: Props) => {
    const stripeCheckout = async () => {
        const response = await fetch(`${API_URL}/payments/checkoutsession`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }).then(response => response.json()).then(response => response)
        window.location.href = response.checkout_session
        props.onComplete();
    }

    return (
        <>
            <p>Minting your NFT to the blockchain writes the image to the blockchain and gives you verifiable
                ownership over it. This costs ETH, so we'll collect $100 to cover the minting fees</p>
            <SSButton onClick={stripeCheckout}>{`Purchase`}</SSButton>
        </>
    );
}

export default Mint;
