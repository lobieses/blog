import { NextPage } from 'next'
import {Wrapper, Textarea, Input, Button, Content, Error} from "./CreatePostStyle";
import {useState} from "react";
import {savePostType} from "../../types/types";

type PropsType = {
    errors: Array<string>,
    savePostFc: (obj: savePostType) => void
}

const CreatePost: NextPage<PropsType> = (props) => {
    const [titleState, setTitleState] = useState<string>('');
    const [bodyState, setBodyState] = useState<string>('');

    const errors = props.errors.map(error => {
        return (
            <Error>{error}</Error>
        )
    });

    return (
        <Wrapper>
            <Content>
                <Input  type="text" placeholder='title...' value={titleState} onChange={(e) => setTitleState(e.target.value)}/>
                <Textarea placeholder='body...' value={bodyState} onChange={(e) => setBodyState(e.target.value)}/>
                <Button onClick={() => props.savePostFc({title: titleState, body: bodyState})}>Create</Button>
                {errors}
            </Content>
        </Wrapper>
    )
}

export default CreatePost;