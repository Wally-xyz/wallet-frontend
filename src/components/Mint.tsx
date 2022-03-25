import * as React from "react";
import styled from "styled-components";
import { SSButton as SButton } from "./Button";
import { API_URL } from "../constants/default";

interface Props {
    authToken: string;
    setTxn: (txn: string) => void;
    onComplete: () => void;
}

const SSButton = styled(SButton)`
    &:hover {
        color: red;
    }
`

const Mint = (props: Props) => {
    const [imgURL, setImgURL] = React.useState('');
    fetch(`${API_URL}/media/recent`, {
        headers: {
            'Authorization': `Bearer ${props.authToken}`
        },
    }).then(response => response.json()).then(response => {
        setImgURL(response.s3_url);
    })
    const mintNFT = async () => {
        const response = await fetch(`${API_URL}/mint/mint`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
        }).then(response => response.json()).then(response => response)
        props.setTxn(response.hash)
        props.onComplete();
    }

    return (
        <>
            {imgURL && <img src={imgURL}/>}
            <SSButton onClick={mintNFT}>{`Mint`}</SSButton>
        </>
    );
}

export default Mint;
