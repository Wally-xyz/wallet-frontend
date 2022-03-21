import * as React from "react";
import { SSButton as SButton } from "./Button";
import { SSInput as SInput } from "./Input";
import { API_URL } from "../constants/default";

interface Props {
    authToken: string;
    onComplete: () => void;
}

const Email = (props: Props) => {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const fileInput: React.RefObject<HTMLInputElement> = React.useRef(null);

    const uploadFile = () => {
        const data = new FormData()
        if (!(fileInput.current && fileInput.current.files && fileInput.current.files.length)) {
            return;
        }
        const file = fileInput.current.files[0]
        data.append('upload_file', file)
        fetch(`${API_URL}/media/upload?name=${name}&description=${description}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
            body: data,
        })
        props.onComplete()
    }

    return (
        <>
            <div>
                Enter a name and description. Both of these will be publicly visible on the NFT
            </div>
            <SInput onChange={(e: any) => setName(e.target.value)} placeholder={"Enter title"} />
            <SInput onChange={(e: any) => setDescription(e.target.value)} placeholder={"Enter description"} />
            <input type="file" accept="image/png, image/jpeg" ref={fileInput} />
            <SButton onClick={uploadFile}>{`Upload`}</SButton>
        </>
    );
}

export default Email;
