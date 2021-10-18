export type PostCommentType = {
    body: string,
    postId: number,
    id: number
}

export type PostType = {
    title: string,
    body: string,
    id: number,
    comments?: Array<PostCommentType>
}

export type savePostType = {
    title: string,
    body: string
}