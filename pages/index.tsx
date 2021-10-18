import type { NextPage } from 'next';
import LatestPosts from "../Components/LastestPosts/LatestsPosts";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../redux/store";
import {PostType} from "../types/types";
import {useEffect} from "react";
import {ActionsTypes, getLatestPosts, clearLatestPosts} from "../redux/posts-reducer";
import {ThunkDispatch} from "redux-thunk";
import {Loading} from "../GlobalStyles/globalStyle";

type AppDispatch = ThunkDispatch<GlobalStateType, void, ActionsTypes>;

const Home: NextPage = () => {
    let posts = useSelector<GlobalStateType, null | Array<PostType>>((state) => {
        return state.posts.posts
    })

    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getLatestPosts())

        return () => {
            dispatch(clearLatestPosts())
        }
    }, [])


    return (
        <div>
            {posts
                ? <LatestPosts
                      posts={posts}
                  />
                : <Loading>Loading...</Loading>
            }
        </div>
    )
}

export default Home
