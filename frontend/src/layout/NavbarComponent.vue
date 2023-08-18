<script setup lang="ts">
//Import tools
import { onMounted, onUnmounted, ref } from 'vue';

const backgroundWhite = ref(false);

//Functions
const changeBackground = () => {
    if (window.scrollY > 10) {
        backgroundWhite.value = true;
    } else {
        backgroundWhite.value = false;
    }
};

//Hooks
onMounted(() => {
    window.addEventListener('scroll', changeBackground);
});

onUnmounted(() => {
    window.removeEventListener('scroll', changeBackground);
});
</script>

<template>
    <nav :class="{ 'background-white': backgroundWhite }">
        <img class="logo" src="../assets/img/logo-pequeño.webp" alt="Logo" />
        <div class="navegation">
            <a href="#cursos">Cursos</a>
            <a href="#nosotros">Sobre mi</a>
            <a href="#contacto">Contacto</a>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    max-height: 5.5rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: transparent;
    position: fixed;
    top: 0;
    z-index: 10;

    img {
        max-width: 80px;
        object-fit: cover;
    }
}
.background-white {
    background-color: rgba(255, 255, 255, 0.877);
    box-shadow: 0 0 1em var(--color-tertiary);
}
.logo {
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em var(--color-tertiary));
}

.navegation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    a {
        text-decoration: none;
        color: var(--color-accent);
        font-weight: 300;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: background-color 300ms;
    }

    a:hover {
        background-color: var(--color-accent);
        color: white;
    }
}
</style>
