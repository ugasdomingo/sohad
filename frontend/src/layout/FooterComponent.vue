<script setup lang="ts">
//Import tools
import { onMounted, onUnmounted, ref } from 'vue';
import { useUtilsStore } from '../stores/utils-store';

//Activate tools
const utilsStore = useUtilsStore();
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
    <footer :class="{ 'background-white': backgroundWhite }">
        <h2>Estética Sohad</h2>
        <p>Todos los derechos reservados</p>
        <button @click="utilsStore.authModal = true">Acceder</button>
    </footer>
</template>

<style scoped lang="scss">
footer {
    max-height: 5rem;
    box-sizing: border-box;
    align-items: center;
    padding: 0 2rem;
    position: sticky;
    bottom: 0;
    z-index: 1;
    display: none;

    h2 {
        font-weight: 500;
        color: var(--color-accent);
    }

    p {
        opacity: 0.5;
    }
}
.background-white {
    background-color: rgba(255, 255, 255, 0.877);
    box-shadow: 0 0 1em var(--color-tertiary);
    display: flex;
    justify-content: space-between;
}

//Responsive
@media screen and (max-width: 768px) {
    footer {
        padding: 0 0.5rem;

        h2 {
            font-size: 1.25rem;
        }

        p {
            font-size: 0.6rem;
        }

        button {
            font-size: 0.6rem;
            padding: 0.5rem 0.75rem;
        }
    }
}
</style>
