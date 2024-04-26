<script setup lang="ts">
// Import tool
import { useUtilsStore } from '../../stores/utils-store';
//Get data from props
defineProps({
    curso: {
        type: Object,
        required: true
    }
});

// Set variables
const utilsStore = useUtilsStore();
</script>

<template>
    <div class="modal-course-info">
        <img src="" alt="cerrar" @click="utilsStore.courseModal = false" />
        <!-- //Informacio emergente -->
        <h2>
            Lo que aprenderás en <br />
            {{ curso?.name }}:
        </h2>
        <ul>
            <li v-for="item in curso?.benefits" :key="item.id" v-html="item.description"></li>
        </ul>

        <h2>¿Por qué con nosotros?</h2>
        <p>{{ curso?.whyUs }}</p>

        <h2>Formación: {{ curso?.location }}</h2>

        <a class="action-btn" href="https://wa.me/584126696619" target="_blank">Reservar Cupo</a>
        <button @click="utilsStore.courseModal = false">Cerrar</button>
    </div>
</template>

<style scoped lang="scss">
.modal-course-info {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    min-height: 80%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
    color: white;
    padding: 1rem;
    //Scroll interno
    overflow-y: auto;

    img {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    h2 {
        font-size: 2rem;
        margin: 1rem 0;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin: 0.5rem 0;
    }

    .action-btn {
        background-color: #f1c40f;
        color: black;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        margin: 1rem 0;
        text-decoration: none;
    }
}
</style>
