<script setup lang="ts">
//Import tools
import { onBeforeMount } from 'vue';
import { usePostStore } from 'src/stores/post-store';
import { useRoute } from 'vue-router';

//Import components
import CardPostComponent from '../../common/CardPostComponent.vue';

//Get data from store
const postStore = usePostStore();
const route = useRoute();

//Fetch data
onBeforeMount(() => {
    postStore.getAllPost();
});
</script>

<template>
    <section class="posts" id="posts">
        <h2>Mi blog de estética</h2>
        <div>
            <div v-if="$route.path === '/blog'" class="posts-gallery">
                <CardPostComponent
                    v-for="post in postStore.allPost"
                    :key="post._id"
                    :post="post"
                />
            </div>
            <div v-else class="posts-gallery">
                <CardPostComponent
                    v-for="post in postStore.lastestPost"
                    :key="post._id"
                    :post="post"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.posts {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4rem 2rem;
    margin: 2rem 0;

    h2 {
        text-align: center;
        font-size: 5rem;
        font-weight: 700;
        margin: 1rem 0;
        color: $primary;
    }

    .posts-gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media screen and (max-width: 768px) {
    .posts {
        h2 {
            font-size: 3rem;
            text-align: center;
        }
    }
}
</style>
