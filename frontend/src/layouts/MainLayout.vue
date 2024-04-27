<template>
  <q-layout view="hHh lpR fFf" class="layout">
    <q-header reveal overlay class="transparent text-primary header q-mx-md">
      <q-toolbar>
        <q-toolbar-title>
          <RouterLink to="/" class="text-primary">
            <img src="../assets/img/logo-pequeño.webp" class="logo" />
          </RouterLink>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      bordered
      class="drawer"
    >
      <NavbarComponent />
    </q-drawer>

    <q-page-container class="q-pt-sm">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavbarComponent from './NavbarComponent.vue';

const rightDrawerOpen = ref(false);

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>

<style scoped lang="scss">
.drawer {
  border-radius: 2rem;
}
.header {
  height: 5rem;
}
.logo {
  width: 5rem;
}
</style>
