<script setup lang="ts">
import { ref } from 'vue';

//Import components
import NewCourseComponent from '../components/forms/NewFormationComponent.vue';

const showNewCourse = ref(false);
const showNewPost = ref(false);

const openNewCourse = () => {
    showNewCourse.value = true;
    showNewPost.value = false;
};

const openNewPost = () => {
    showNewPost.value = true;
    showNewCourse.value = false;
};
</script>

<template>
    <div class="page">
        <h1>Escritorio</h1>
        <section class="options">
            <button @click="openNewCourse">Nuevo curso</button>
            <button @click="openNewPost">Nueva publicación</button>
        </section>
        <section class="new-course" v-if="showNewCourse">
            <NewCourseComponent />
        </section>
        <section class="new-post" v-if="showNewPost"></section>
    </div>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 6rem 1rem 0;
    h1 {
        margin-bottom: 20px;
        text-align: center;
    }
    .options {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
}
</style>
