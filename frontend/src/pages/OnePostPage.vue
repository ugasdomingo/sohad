<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from 'src/stores/post-store';

const route = useRoute();
const postStore = usePostStore();
const post = ref();
const postId = route.params.id;
const postDate = ref();

const findPost = () => {
    post.value = postStore.allPost.find((p: any) => p._id === postId);
};

onBeforeMount(async () => {
    if (!postStore.allPost) {
        await postStore.getAllPost();
        findPost();
    } else {
        findPost();
    }

    const getPostDate = new Date(post.value.createdAt);
    postDate.value = getPostDate.toLocaleDateString();
});
</script>

<template>
    <q-page class="page">
        <section class="left-side">
            <q-img
                :src="post?.coverImage.secure_url"
                :alt="post?.title"
                class="post-image"
            />
            <div class="info">
                <p>Publicado el {{ postDate }}</p>
            </div>
        </section>
        <section class="right-side">
            <h3>{{ post?.title }}</h3>
            <p v-html="post?.content"></p>
        </section>
    </q-page>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
    min-height: 110vh;

    .left-side {
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .post-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    .right-side {
        width: 60%;
    }
}
</style>
