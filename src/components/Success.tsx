import * as React from "react";
import { SSButton } from "./Button";

interface Props {
    authToken: string;
    txn: string;
    onComplete: () => void;
}

const Success = (props: Props) => {
    const etherscan_url = `https://www.etherscan.com/tx/${props.txn}`
    return (
        <div>
            <p>Congrats! Your NFT has been submitted to the blockchain. This may take a couple minutes.
            You'll get an email when it's done, but you can also check the status <a href={etherscan_url}>here</a></p>
            <p>Once it's minted, we'll walk you through the steps to connect it to Twitter.</p>
            <SSButton onClick={props.onComplete}>{`Connect to Twitter`}</SSButton>
        </div>
    );
}

export default Success;
