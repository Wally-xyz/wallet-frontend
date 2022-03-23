import * as React from "react";
import styled from 'styled-components';
import { SSButton as SButton } from "./Button";
import stepOne from '../assets/IMG_9103.png';
import stepTwo from "../assets/IMG_9102.png";
import stepThree from "../assets/IMG_9101.png";

interface Props {
    authToken: string;
    onComplete: () => void;
}

const Screenshot = styled.img`
    margin-bottom: 16px;
`

const Mint = (props: Props) => {
    return (
        <>
            <div>You minted your own NFT! Now we'll help connect your picture to Twitter.</div>
            <div>
                <ol>
                    <li>Pull out your phone and open the official Twitter app</li>
                    <li>Navigate to your profile</li>
                    <li>Click on "Edit Profile"</li>
                    <li>Click on your profile pic</li>
                    <li>Select "choose NFT"</li>
                </ol>
            </div>
            <Screenshot src={stepOne}/>
            <div>Select the QR code icon in the top right corner</div> 
            <Screenshot src={stepTwo}/>
            <div>Once you have your QR code, press continue. You'll use this on the next screen</div> 
            <Screenshot src={stepThree}/>
            <SButton onClick={props.onComplete}>{`Continue`}</SButton>
        </>
    );
}

export default Mint;
