<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useUserStore } from '../../stores/user-store';
import { useRouter } from 'vue-router';

//Activate tools
const userStore = useUserStore();
const router = useRouter();

//Get data
const email = ref('');
const password = ref('');

//Loading
const loading = ref(false);

//Functions
const handleSubmit = async () => {
  try {
    loading.value = true;
    await userStore.access(email.value, password.value);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    router.push('/escritorio');
  }
};
</script>

<template>
  <div class="login">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="loading">Iniciar sesión</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 500;
    color: $accent;
  }

  form {
    display: flex;
    flex-direction: column;

    .input-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0.5rem 0;

      label {
        font-weight: 500;
        color: $accent;
      }

      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid $accent;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
      }
    }

    button {
      padding: 0.5rem;
      margin-top: 2rem;
      border: 1px solid $accent;
      border-radius: 0.5rem;
      margin: 0.5rem 0;
      background-color: $accent;
      color: white;
      font-weight: 500;
      cursor: pointer;
    }
  }
}
</style>
