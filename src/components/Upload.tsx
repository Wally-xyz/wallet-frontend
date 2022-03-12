import * as React from "react";
import { SSButton as SButton } from "./Button";
import { SSInput as SInput } from "./Input";

interface Props {
    authToken: string;
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
        fetch(`http://localhost:80/media/upload?name=${name}&description=${description}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${props.authToken}`
            },
            body: data,
        })
    }

    return (
        <>
            <SInput onChange={(e: any) => setName(e.target.value)} placeholder={"Enter title"} />
            <SInput onChange={(e: any) => setDescription(e.target.value)} placeholder={"Enter description"} />
            <input type="file" accept="image/png, image/jpeg" ref={fileInput} />
            <SButton onClick={uploadFile}>{`Upload`}</SButton>
        </>
    );
}

export default Email;
