<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useUtilsStore } from '../../stores/utils-store';
import { useUserStore } from '../../stores/user-store';

//Activate tools
const utilsStore = useUtilsStore();
const userStore = useUserStore();

//Get data
const name = ref('');
const email = ref('');
const password = ref('');

//Loading
const loading = ref(false);

//Functions
const handleSubmit = async () => {
    try {
        loading.value = true;
        await userStore.register(name.value, email.value, password.value);
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="register">
        <h2>Regístrate</h2>
        <form @submit.prevent="handleSubmit">
            <div class="input-group">
                <label for="name">Nombre</label>
                <input type="text" id="name" v-model="name" required />
            </div>
            <div class="input-group">
                <label for="email">Correo electrónico</label>
                <input type="email" id="email" v-model="email" required />
            </div>
            <div class="input-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" :disabled="loading">Regístrate</button>
        </form>

        <div class="login">
            <p>¿Ya tienes cuenta?</p>
            <button @click="utilsStore.isUser = true">Inicia sesión</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.register {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;

        .input-group {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            label {
                margin-bottom: 0.5rem;
                color: var(--color-accent);
            }

            input {
                width: 100%;
                padding: 0.5rem;
                border-radius: 0.5rem;
                border: 1px solid var(--color-accent);
                margin-bottom: 1rem;
            }
        }

        button {
            padding: 0.5rem 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--color-accent);
            background-color: var(--color-accent);
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: white;
                color: var(--color-tertiary);
            }
        }
    }

    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;

        p {
            margin-right: 0.5rem;
        }

        button {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid var(--color-accent);
            background-color: var(--color-accent);
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background-color: white;
                color: var(--color-tertiary);
            }
        }
    }
}
</style>
