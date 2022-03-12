import * as React from "react";
import { SActionsColumn } from "./Actions";
import { SSButton as SButton } from "./Button";
import { SSInput as SInput } from "./Input";

interface Props {
    setAuthToken: (authToken: string) => void;
    setAccounts: (accounts: string[], address: string) => void;
}

const Email = (props: Props) => {
    const [email, setEmail] = React.useState('')
    const [code, setCode] = React.useState('')
    const [hasSentEmail, setHasSentEmail] = React.useState(false)

    const sendEmail = () => {
        const body = {
            'email': email,
        }
        fetch(`http://localhost:80/auth/sendcode?email=${email}`, {
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
        const response = await fetch(`http://localhost:80/auth/verifyemail?email=${email}&code=${code}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json().then(response => response))
        props.setAuthToken(response.access_token)
        const wallets = await fetch(`http://localhost:80/tokens/wallet?access_token=${response.access_token}`, {
            headers: {
                'Authorization': `Bearer ${response.access_token}`
            }
        }).then(response => response.json().then(response => response))
        props.setAccounts([wallets.data], wallets.data)
    }

    return (
        <>
            <SActionsColumn>
                <>
                    <SInput onChange={(e: any) => setEmail(e.target.value)} placeholder={"Enter Email"} />
                    <SButton onClick={sendEmail}>{`Submit`}</SButton>
                </>
            </SActionsColumn>
            {hasSentEmail ? <SActionsColumn>
                <>
                    <SInput onChange={(e: any) => setCode(e.target.value)} placeholder={"Enter Code"} />
                    <SButton onClick={verifyCode}>{`Verify`}</SButton>
                </>
            </SActionsColumn> : <></>
            }
        </>
    );
}

export default Email;
