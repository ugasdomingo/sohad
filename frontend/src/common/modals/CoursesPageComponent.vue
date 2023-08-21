<script setup lang="ts">
//Get data from props
defineProps({
    curso: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="course-info">
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

        <a class="action-btn" href="#" target="_blank">Reservar Cupo</a>
    </div>
</template>

<style scoped lang="scss">
.course-info {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 60%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2rem;
        font-weight: bold;
        margin: 1rem 0;
        text-align: center;
        color: var(--color-accent);
    }

    ul {
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        li {
            width: 75%;
            margin: 0.5rem 0;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background-color: #eee;
        }
    }

    p {
        width: 80%;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #eee;
    }

    .action-btn {
        width: 50%;
        margin: 0.5rem 0;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: var(--color-accent);
        text-align: center;
        text-decoration: none;
        color: whitesmoke;
        font-weight: bold;
    }
}

@media screen and (max-width: 768px) {
    .course-info {
        width: 90%;

        h2 {
            font-size: 1.5rem;
        }
    }
}
</style>
