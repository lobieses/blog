import {NextPage} from "next";
import Post from "./Post/Post";
import {PostType} from "../../types/types";

type PropsType = {
    posts: Array<PostType>,

}

const LatestPosts: NextPage<PropsType> = ({posts}) => {
    let postsBlock = posts?.map((post, number) => {
        return (
            <div key={number}>
                <Post
                    post={post}
                />
            </div>
        )
    })
    postsBlock?.reverse(); //for get latest posts

    return (
        <div>
            {postsBlock}
        </div>
    )
}

export default LatestPosts
