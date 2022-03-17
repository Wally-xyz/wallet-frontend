import * as React from "react";
import { SSButton as SButton } from "./Button";
import stepOne from '../assets/IMG_9103.png';
import stepTwo from "../assets/IMG_9102.png";
import stepThree from "../assets/IMG_9101.png";

interface Props {
    authToken: string;
    onComplete: () => void;
}

const Mint = (props: Props) => {
    return (
        <>
            <div>Now we'll connect your picture to Twitter! Open the Twitter app and navigate to your profile. Click on "Edit Profile" and
                then your profile pic. Then select "choose NFT"</div>
            <img src={stepOne}/>
            <img src={stepTwo}/>
            <img src={stepThree}/>
            <SButton onClick={props.onComplete}>{`Mint`}</SButton>
        </>
    );
}

export default Mint;
