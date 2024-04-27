<script setup lang="ts">
import { ref } from 'vue';
import NewFormationComponent from 'src/components/forms/NewFormationComponent.vue';
import NewPostComponent from 'src/components/forms/NewPostComponent.vue';
import PostsComponent from 'src/components/home/PostsComponent.vue';
import CoursesComponent from 'src/components/home/CoursesComponent.vue';

const showIn = ref(0);
</script>

<template>
    <q-page class="page">
        <section class="left-content">
            <h2>Escritorio</h2>
            <p>¿Qué quieres hacer hoy?</p>
            <q-btn label="Crear publicación" @click="showIn = 1" />
            <q-btn label="Crear curso" @click="showIn = 2" />
            <q-btn label="Ver publicaciones" @click="showIn = 3" />
            <q-btn label="Ver cursos" @click="showIn = 4" />
        </section>
        <section class="right-content">
            <NewPostComponent v-if="showIn === 1" />
            <NewFormationComponent v-if="showIn === 2" />
            <PostsComponent v-if="showIn === 3" />
            <CoursesComponent v-if="showIn === 4" />
        </section>
    </q-page>
</template>

<style scoped lang="scss">
.page {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    position: relative;

    .left-content {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        position: fixed;
        top: 5rem;

        h2 {
            font-weight: 500;
            color: $accent;
        }

        p {
            margin: 10px 0;
        }

        q-btn {
            margin: 10px 0;
        }
    }

    .right-content {
        width: 70%;
        position: absolute;
        right: 2rem;
    }
}

@media screen and (max-width: 768px) {
    .page {
        flex-direction: column;
        gap: 0;

        .left-content {
            width: 100%;
            position: relative;
            top: 0;
            margin-bottom: 0;
            gap: 0.5rem;

            h2 {
                font-size: 2rem;
                margin: 0;
            }
        }

        .right-content {
            width: 100%;
            position: relative;
            right: 0;
        }
    }
}
</style>
