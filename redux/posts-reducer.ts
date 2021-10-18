import {ThunkAction} from "redux-thunk";
import {GlobalStateType} from "./store";
import {PostType, savePostType} from "../types/types";
import {postsAPI} from "../api/api";

const SET_LATEST_POSTS = 'SET_LATEST_POSTS';
const CLEAR_LATEST_POSTS = 'CLEAR_LATEST_POSTS';
const SET_SELECTED_POST = 'SET_SELECTED_POST';
const CLEAR_SELECTED_POST = 'CLEAR_SELECTED_POST';


let initialState = {
    posts: null as null | Array<PostType>,
    selectedPost: null as null | PostType
};

type initialStateType = typeof initialState;

const postsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch(action.type) {
        case SET_LATEST_POSTS: {
            return  {
                ...state,
                posts: action.posts
            }
        }
        case CLEAR_LATEST_POSTS: {
            return  {
                ...state,
                posts: null
            }
        }
        case SET_SELECTED_POST: {
            return  {
                ...state,
                selectedPost: action.post
            }
        }
        case CLEAR_SELECTED_POST: {
            return  {
                ...state,
                selectedPost: null
            }
        }
        default:
            return state;
    }
}

export type ActionsTypes = SetLatestPostsType | clearLatestPostsType | setSelectedPostType | clearSelectedPostType

type ThunkType = ThunkAction<Promise<void>, GlobalStateType, unknown, ActionsTypes>



type SetLatestPostsType = {
    type: typeof SET_LATEST_POSTS,
    posts: Array<PostType>
}
export const setLatestPosts = (posts: Array<PostType>): SetLatestPostsType => ({type: SET_LATEST_POSTS, posts})

type clearLatestPostsType = {
    type: typeof CLEAR_LATEST_POSTS
}
export const clearLatestPosts = (): clearLatestPostsType => ({type: CLEAR_LATEST_POSTS})

type setSelectedPostType = {
    type: typeof  SET_SELECTED_POST,
    post: PostType
}
export const setSelectedPost = (post: PostType): setSelectedPostType => ({type: SET_SELECTED_POST, post})

type clearSelectedPostType = {
    type: typeof CLEAR_SELECTED_POST
}
export const clearSelectedPost = (): clearSelectedPostType => ({type: CLEAR_SELECTED_POST})

export const getLatestPosts = (): ThunkType => {
    return async (dispatch) => {
        let response = await postsAPI.getLatestPosts();
        dispatch(setLatestPosts(response));
    }
}

export const getSelectedPost = (postId: string): ThunkType => {
    return async (dispatch) => {
        let response = await postsAPI.getSelectedPost(postId);
        dispatch(setSelectedPost(response));
    }
}

export const savePost = (postParams: savePostType): ThunkType => {
    return async (dispatch) => {
       await postsAPI.savePost(postParams.title, postParams.body);
    }
}

export default postsReducer;