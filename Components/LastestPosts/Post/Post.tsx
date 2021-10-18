import { NextPage } from 'next';
import {PostType} from "../../../types/types";
import {Title, Body, PostWrapper} from "./PostStyles";
import { useRouter } from 'next/router';

type PropsType = {
    post: PostType
}

const Post: NextPage<PropsType> = ({post}) => {
    const router = useRouter();

    return (
        <PostWrapper onClick={() => router.push(`/posts/${post.id}`)}>
           <Title>{post.title}</Title>
            <Body>{post.body}</Body>
        </PostWrapper>
    )
}

export default Post;