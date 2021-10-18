import { NextPage } from 'next'
import {PostType} from "../../types/types";
import {
    Body,
    BodyParam,
    CommentsParam,
    CommentsWrapper,
    ParamWrapper,
    PostWrapper,
    Title,
    TitleParam,
    Li
} from "./ViewPostStyles";

type PropsType = {
    selectedPost: PostType
}

const ViewPost: NextPage<PropsType> = ({selectedPost}) => {
    const postComments = selectedPost.comments?.map((comment, number) => {
        return (
            <Li key={number}>
                {comment.body}
            </Li>
        )
    })

    return (
        <>
            <PostWrapper>
                <ParamWrapper>
                    <TitleParam>title: </TitleParam><Title>{selectedPost.title}</Title>
                </ParamWrapper>
                <ParamWrapper>
                    <BodyParam>body:</BodyParam><Body>{selectedPost.body}</Body>
                </ParamWrapper>
            </PostWrapper>
            <CommentsWrapper>
                <CommentsParam>Comments:</CommentsParam>

                    {postComments?.length !== 0
                        ? <ul>{postComments}</ul>
                        : <h1>No comments</h1>
                    }

            </CommentsWrapper>

        </>

    )
}

export default ViewPost;