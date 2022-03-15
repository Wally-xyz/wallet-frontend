import * as React from "react";
import styled from "styled-components";
import { SSButton as SButton } from "./Button";

interface Props {
    authToken: string;
}

const SSButton = styled(SButton)`
    &:hover {
        color: red;
    }
`

const Mint = (props: Props) => {
    const stripeCheckout = async () => {
        const response = await fetch(`http://localhost:80/payments/checkoutsession`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }).then(response => response.json()).then(response => response)
        window.location.href = response.checkout_session
    }

    return (
        <>
            <SSButton onClick={stripeCheckout}>{`Purchase`}</SSButton>
        </>
    );
}

export default Mint;
