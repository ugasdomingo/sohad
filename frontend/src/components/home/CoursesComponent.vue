<script setup lang="ts">
//Import tools
import { onBeforeMount } from 'vue';
import { useCourseStore } from '../../stores/course-store';

// Import components
import CardCourseComponent from '../../common/CardCourseComponent.vue';

// Activate tools
const courseStore = useCourseStore();

// Fetch data
onBeforeMount(() => {
    courseStore.getAllCourse();
});
</script>

<template>
    <section class="courses" id="cursos">
        <h2>Cursos Disponibles</h2>
        <main>
            <div
                v-for="course in courseStore.allCourse"
                :key="course.id"
                class="card-container"
            >
                <CardCourseComponent :curso="course" />
            </div>
        </main>
    </section>
</template>

<style scoped lang="scss">
.courses {
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

    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media screen and (max-width: 768px) {
    .courses {
        h2 {
            font-size: 3rem;
            text-align: center;
        }
    }
}
</style>
