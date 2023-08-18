<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useUtilsStore } from '../../stores/utils-store';
import { useUserStore } from '../../stores/user-store';

//Activate tools
const utilsStore = useUtilsStore();
const userStore = useUserStore();

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

        <div class="register">
            <p>¿No tienes cuenta?</p>
            <button @click="utilsStore.isUser = false">Regístrate</button>
        </div>
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
        color: var(--color-accent);
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
                color: var(--color-accent);
            }

            input {
                width: 100%;
                padding: 0.5rem;
                border: 1px solid var(--color-accent);
                border-radius: 0.5rem;
                margin: 0.5rem 0;
            }
        }

        button {
            padding: 0.5rem;
            margin-top: 2rem;
            border: 1px solid var(--color-accent);
            border-radius: 0.5rem;
            margin: 0.5rem 0;
            background-color: var(--color-accent);
            color: white;
            font-weight: 500;
            cursor: pointer;
        }
    }

    .register {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        p {
            margin-right: 0.5rem;
        }

        button {
            background-color: transparent;
            border: none;
            color: var(--color-accent);
            font-weight: 500;
            cursor: pointer;
        }
    }
}
</style>
