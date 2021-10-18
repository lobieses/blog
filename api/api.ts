import axios from 'axios';
import {PostType, savePostType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://simple-blog-api.crew.red/',
});


export const postsAPI = {
    getLatestPosts() {
        return instance.get<Array<PostType>>(`posts`)
            .then((response) => {
                return response.data;
            });
    },
    getSelectedPost(postId: string) {
        return instance.get<PostType>(`posts/${postId}?_embed=comments`)
            .then((response) => {
                return response.data;
            });
    },
    savePost(title: string, body: string) {
        return instance.post(`posts`, {title, body})
            .then((response) => {
                return response.data;
            });
    }
};


