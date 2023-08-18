<script setup lang="ts">
// Import tools
import { useUtilsStore } from './stores/utils-store';

// Import components
import NavbarComponent from './layout/NavbarComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import AuthModalComponent from './common/modals/AuthModalComponent.vue';
import CoursesComponent from './components/CoursesComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FooterComponent from './layout/FooterComponent.vue';

// Activate tools
const utilsStore = useUtilsStore();
</script>

<template>
    <NavbarComponent />
    <main>
        <HeroComponent />
        <AuthModalComponent v-if="utilsStore.authModal" />
        <CoursesComponent />
        <AboutMeComponent />
        <ContactComponent />
    </main>
    <FooterComponent />
</template>

<style scoped></style>
