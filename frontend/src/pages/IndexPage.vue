<template>
    <q-page class="row items-center justify-evenly q-mt-none q-pt-none">
        <HeroComponent />
        <CoursesComponent />
        <PostsComponent />
        <AboutMeComponent />
        <ContactComponent />
    </q-page>
</template>

<script setup lang="ts">
import HeroComponent from 'src/components/home/HeroComponent.vue';
import CoursesComponent from 'src/components/home/CoursesComponent.vue';
import PostsComponent from 'src/components/home/PostsComponent.vue';
import AboutMeComponent from 'src/components/home/AboutMeComponent.vue';
import ContactComponent from 'src/components/home/ContactComponent.vue';
</script>
