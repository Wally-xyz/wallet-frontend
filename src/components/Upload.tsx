import * as React from "react";
import styled from 'styled-components';
import { SSButton as SButton } from "./Button";
import { SSInput as SInput } from "./Input";
import { API_URL } from "../constants/default";

interface Props {
    authToken: string;
    onComplete: () => void;
}

const SUpload = styled.input`
    margin-bottom: 8px;
`;

const Email = (props: Props) => {
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const fileInput: React.RefObject<HTMLInputElement> = React.useRef(null);

    const [image, setImage] = React.useState<string | null>(null)

    const onImageChange = (event:any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

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
            <SUpload type="file" onChange={onImageChange} accept="image/png, image/jpeg" ref={fileInput} />
            {image && <img src={image}/>}
            <SButton onClick={uploadFile}>{`Upload`}</SButton>
        </>
    );
}

export default Email;
