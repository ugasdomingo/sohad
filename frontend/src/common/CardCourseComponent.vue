<script setup lang="ts">
// Import tool
import { ref } from 'vue';

//Import components
import CoursesPageComponent from './modals/CoursesPageComponent.vue';

// Set variables
const showMoreInfo = ref(false);

//Get data from props
defineProps({
    curso: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="card">
        <img :src="curso?.image" :alt="curso?.name" />
        <div class="card-content">
            <div class="card-header">
                <h2 class="card-title">{{ curso?.name }}</h2>
            </div>
            <div class="card-body">
                <p class="card-text">
                    {{ curso?.description }}
                </p>
            </div>

            <button @click="showMoreInfo = !showMoreInfo">Más Información</button>
        </div>
    </div>
    <CoursesPageComponent v-if="showMoreInfo" :curso="curso" class="more-info" />
</template>

<style scoped lang="scss">
.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1rem;
    padding: 0;
    width: 60%;
    min-height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 45%;
        max-height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
}
.card-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.card-header {
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
}
.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem;
    text-align: center;
}
.card-body {
    padding: 1rem;
    overflow: hidden;
}
.card-text {
    font-size: 1rem;
    font-weight: 300;
}
ul {
    list-style: none;
    padding: 0;
}
li {
    font-size: 01rem;
    font-weight: 300;
}
button {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

@media (max-width: 768px) {
    .card {
        width: 100%;
        flex-direction: column;
        margin: 1rem 0;
        padding: 1rem 0;
        border: 1px solid var(--color-tertiary);
        background-color: #1d1d1d28;
    }
    img {
        min-width: 250px;
    }
    .card-content {
        width: 100%;
    }
    .card-title {
        color: var(--color-tertiary);
    }
    button {
        margin: 1rem 0;
        background-color: var(--color-tertiary);
    }
}
</style>
