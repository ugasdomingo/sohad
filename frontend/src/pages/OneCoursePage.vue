<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useCourseStore } from 'src/stores/course-store';

const route = useRoute();
const courseStore = useCourseStore();
const course = ref();
const courseId = route.params.id;

const findCourse = () => {
    course.value = courseStore.allCourse.find((c: any) => c._id === courseId);
};

onBeforeMount(async () => {
    if (!courseStore.allCourse) {
        await courseStore.getAllCourse();
        findCourse();
    } else {
        findCourse();
    }
});
</script>

<template>
    <q-page class="page">
        <section class="left-side">
            <q-img
                :src="course?.coverImage.secure_url"
                :alt="course?.courseName"
                class="course-image"
            />
            <div class="info">
                <p>Comienza: {{ course?.initialDate }}</p>
                <p>Duración: {{ course?.duration }}</p>
                <p>Modalidad {{ course?.location }}</p>
                <p>Costo: {{ course?.price }}</p>
                <a href="https://wa.me/584126696619" target="_blank"
                    >Inscribirme</a
                >
            </div>
        </section>
        <section class="right-side">
            <h3>{{ course?.courseName }}</h3>
            <p v-html="course?.description"></p>
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
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 1rem;
        background-color: $primary;

        .info {
            display: flex;
            padding-top: 2rem;
            flex-direction: column;
            gap: 0.5rem;
            color: $dark;
            font-size: 1.25rem;

            a {
                background-color: $dark;
                color: white;
                padding: 0.5rem;
                border-radius: 5px;
                text-decoration: none;
                text-align: center;
                transition: background-color 0.3s;
                cursor: pointer;

                &:hover {
                    background-color: darken($secondary, 10%);
                }
            }
        }

        .course-image {
            width: 250px;
            height: 350px;
            object-fit: cover;
            border-radius: 1rem;
        }
    }

    .right-side {
        width: 60%;
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 768px) {
    .page {
        flex-direction: column;

        .left-side {
            width: 100%;
            padding: 1rem;

            .info {
                padding-top: 1rem;
                font-size: 1rem;

                a {
                    padding: 0.25rem;
                }
            }

            .course-image {
                width: 100%;
                height: 200px;
            }
        }

        .right-side {
            width: 100%;

            h3 {
                font-size: 1.5rem;
                line-height: 1.5;
            }
        }
    }
}
</style>
