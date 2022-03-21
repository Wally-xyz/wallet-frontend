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
        color: red;
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
            <SSButton onClick={stripeCheckout}>{`Purchase`}</SSButton>
        </>
    );
}

export default Mint;
