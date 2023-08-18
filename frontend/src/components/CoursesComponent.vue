<script setup lang="ts">
//Import tools
import { onBeforeMount } from 'vue';
import { useCourseStore } from '../stores/course-store';

// Import components
import CardCourseComponent from '../common/CardCourseComponent.vue';

// Activate tools
const courseStore = useCourseStore();

// Fetch data
onBeforeMount(() => {
    courseStore.getAllCourse(3);
});
</script>

<template>
    <section class="courses">
        <h2>Cursos Disponibles</h2>
        <div class="card-container">
            <div v-for="course in courseStore.allCourse" :key="course.id">
                <CardCourseComponent :curso="course" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.courses {
    widows: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    h2 {
        font-size: 5rem;
        font-weight: 700;
        margin: 1rem 0;
        color: var(--color-primary);
    }
}
.card-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
