<script setup lang="ts">
defineProps({
    menuType: {
        type: String,
        required: true
    }
});
</script>

<template>
    <nav :class="menuType == 'normal' ? 'navegation' : 'responsive'">
        <a href="#cursos">Cursos</a>
        <a href="#nosotros">Sobre mi</a>
        <a href="#contacto">Contacto</a>
    </nav>
</template>

<style scoped lang="scss">
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

.responsive {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--color-primary);
    border-radius: 1rem;
    transform: translateX(-20%);
    transition: transform 300ms;
    position: fixed;
    padding: 1.5rem 0.5rem;
    top: 1.5rem;
    right: 2rem;
    z-index: 10;
}

.responsive a {
    color: white;
    font-size: 2rem;
    font-weight: 300;
    padding: 0 2rem;
}
</style>
