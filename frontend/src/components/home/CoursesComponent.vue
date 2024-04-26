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
    courseStore.getAllCourse(3);
});
</script>

<template>
    <section class="courses" id="cursos">
        <h2>Cursos Disponibles</h2>
        <div v-for="course in courseStore.allCourse" :key="course.id" class="card-container">
            <CardCourseComponent :curso="course" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.courses {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
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
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
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
