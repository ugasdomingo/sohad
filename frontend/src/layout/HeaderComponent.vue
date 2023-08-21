<script setup lang="ts">
//Import tools
import { onMounted, onUnmounted, ref } from 'vue';

//Import components
import NavbarComponent from './NavbarComponent.vue';

//Variables
const backgroundWhite = ref(false);
const showMenu = ref(false);

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
    <header :class="{ 'background-white': backgroundWhite }">
        <img class="logo" src="../assets/img/logo-pequeño.webp" alt="Logo" />
        <NavbarComponent menuType="normal" class="normal-nav" />
        <div class="menu-icon">
            <img
                src="../assets/menu-icon.svg"
                alt="Menu"
                class="icon"
                @click="showMenu = !showMenu"
            />

            <NavbarComponent menuType="mobile" class="responsive-nav" v-if="showMenu" />
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
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

.menu-icon {
    display: none;
}
.icon {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .normal-nav {
        display: none;
    }
    .menu-icon {
        display: block;
    }
}
</style>
