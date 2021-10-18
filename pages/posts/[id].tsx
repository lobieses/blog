import { NextPage } from 'next'
import ViewPost from "../../Components/ViewPost/ViewPost";
import { useRouter } from 'next/router';
import {useEffect} from "react";
import {ActionsTypes, clearSelectedPost, getSelectedPost} from "../../redux/posts-reducer";
import {ThunkDispatch} from "redux-thunk";
import {GlobalStateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {PostType} from "../../types/types";
import {Loading} from "../../GlobalStyles/globalStyle";

type AppDispatch = ThunkDispatch<GlobalStateType, void, ActionsTypes>;

const ViewPostContainer: NextPage = () => {
    const selectedPost = useSelector<GlobalStateType, null | PostType>((state) => {
        return state.posts.selectedPost
    })

    const {query} = useRouter();
    const dispatch: AppDispatch = useDispatch();

    const selectedPostId: string | undefined | string[] = query.id;

    useEffect(() => {
        if(typeof selectedPostId === 'string') {
            dispatch(getSelectedPost(selectedPostId));
        }

        return () => {
            dispatch(clearSelectedPost())
        }
    }, [])

    return (
        <div>
            {selectedPost !== null
                ? <ViewPost
                     selectedPost={selectedPost}
                   />
                : <Loading>Loading...</Loading>
            }

        </div>
    )
}

export default ViewPostContainer;