<script setup lang="ts">
import { useCourseStore } from 'src/stores/course-store';
import { useRoute } from 'vue-router';
//Get data from props
defineProps({
    curso: {
        type: Object,
        required: true,
    },
});

const courseStore = useCourseStore();
const route = useRoute();
const path = route.path;

const deleteCourse = async (id: string) => {
    await courseStore.deleteCourse(id);
    await courseStore.getAllCourse();
};
</script>

<template>
    <div class="card">
        <h2 class="card-title">{{ curso?.courseName }}</h2>
        <img :src="curso?.coverImage.secure_url" :alt="curso?.name" />
        <RouterLink :to="'/cursos/' + curso?._id" class="btn">
            Saber más
        </RouterLink>
        <q-btn
            v-if="path === '/escritorio'"
            label="Eliminar"
            color="negative"
            @click="deleteCourse(curso._id)"
        />
    </div>
</template>

<style scoped lang="scss">
.card {
    border: 1px solid $dark;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    width: 300px;

    .card-title {
        height: 75px;
        line-height: 1.75rem;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-align: center;
    }

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    .btn {
        display: block;
        width: 100%;
        padding: 0.5rem;
        text-align: center;
        text-decoration: none;
        font-size: 1.25rem;
        background-color: $secondary;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: darken($primary, 10%);
        }
    }

    button {
        margin-top: 1rem;
    }
}
</style>
