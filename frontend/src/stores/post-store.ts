//Import tools
import { defineStore } from 'pinia';
import { api } from '../boot/axios';
import { ref } from 'vue';
import { useUserStore } from './user-store';

//Define store
export const usePostStore = defineStore('post', () => {
    const userStore = useUserStore();
    const allPost = ref();
    const lastestPost = ref();
    const onePost = ref();

    //Get all posts
    const getAllPost = async () => {
        try {
            const res = await api({
                url: '/posts/all',
                method: 'GET',
            });

            allPost.value = res.data.posts;
            // filter lastest 3 posts
            lastestPost.value = res.data.posts.slice(0, 3);
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    //Create post
    const createPost = async (post: any) => {
        try {
            const res = await api({
                url: '/posts',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data',
                },
                data: post,
            });

            return res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    //Get one post
    const getOnePost = async (postId: string) => {
        try {
            const res = await api({
                url: `/posts/${postId}`,
                method: 'GET',
            });

            onePost.value = res.data.post;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    //Delete post
    const deletePost = async (postId: string) => {
        try {
            const res = await api({
                url: `/posts/${postId}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                },
            });

            return res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    //Update post
    const updatePost = async (postId: string, post: any) => {
        try {
            const res = await api({
                url: `/posts/${postId}`,
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + userStore.token,
                    'Content-Type': 'multipart/form-data',
                },
                data: post,
            });

            return res.data;
        } catch (error: any) {
            throw error.response?.data || error;
        }
    };

    return {
        allPost,
        lastestPost,
        onePost,
        getAllPost,
        createPost,
        getOnePost,
        deletePost,
        updatePost,
    };
});
