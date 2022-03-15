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
    const [txn, setTxn] = React.useState();
    const mintNFT = async () => {
        const response = await fetch(`http://localhost:80/mint/mint`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }).then(response => response.json()).then(response => response)
        setTxn(response.hash)
    }

    return (
        <>
            <SSButton onClick={mintNFT}>{`Mint`}</SSButton>
            {txn && <div>{txn}</div>}
        </>
    );
}

export default Mint;
