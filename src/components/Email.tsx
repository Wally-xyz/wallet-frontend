import * as React from "react";
import styled, { keyframes } from 'styled-components';
import { SActionsColumn } from "./Actions";
import { SSButton as SButton } from "./Button";
import { SSInput as SInput } from "./Input";
import { API_URL } from "../constants/default";

interface Props {
    setAuthToken: (authToken: string) => void;
    setAccounts: (accounts: string[], address: string) => void;
}

const keyframe = keyframes`
    from {
        height: 0;
    }

    to {
        height: 133px;
    }
`;

const Description = styled.div`
    margin-bottom: 8px;
`;

const AppearingSection = styled.div`
    animation: ${keyframe} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    overflow: hidden;
`

const Email = (props: Props) => {
    const [email, setEmail] = React.useState('')
    const [code, setCode] = React.useState('')
    const [hasSentEmail, setHasSentEmail] = React.useState(false)

    const sendEmail = () => {
        const body = {
            'email': email,
        }
        fetch(`${API_URL}/auth/sendcode?email=${email}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setHasSentEmail(true)
    }

    const verifyCode = async () => {
        const body = {
            'email': email,
            'code': code,
        }
        const response = await fetch(`${API_URL}/auth/verifyemail?email=${email}&code=${code}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json().then(response => response))
        props.setAuthToken(response.access_token)
        const wallets = await fetch(`${API_URL}/tokens/wallet?access_token=${response.access_token}`, {
            headers: {
                'Authorization': `Bearer ${response.access_token}`
            }
        }).then(response => response.json().then(response => response))
        props.setAccounts([wallets.data], wallets.data)
    }

    return (
        <>
            <Description>The easiest way to set your twitter profile picture as an NFT, all without needing to own crypto or
                secure a private key</Description>
            <Description>Get started by entering your email address below (this won't become public as part of the NFT):</Description>
            <SActionsColumn>
                <>
                    <SInput onChange={(e: any) => setEmail(e.target.value)} placeholder={"Enter Email"} />
                    <SButton onClick={sendEmail}>{`Submit`}</SButton>
                </>
            </SActionsColumn>
            {
                hasSentEmail ?
                    <AppearingSection>
                        <Description>We just sent you an email with a login code. Enter it here!</Description>
                        <SActionsColumn>
                            <>
                                <SInput onChange={(e: any) => setCode(e.target.value)} placeholder={"Enter Code"} />
                                <SButton onClick={verifyCode}>{`Verify`}</SButton>
                            </>
                        </SActionsColumn>
                    </AppearingSection>
                    : <></>
            }
        </>
    );
}

export default Email;
