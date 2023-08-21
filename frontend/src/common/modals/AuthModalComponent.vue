<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';
import { useUserStore } from '../../stores/user-store';

//Import components
import NewFormationComponent from '../../components/forms/NewFormationComponent.vue';
import LoginComponent from '../../components/forms/LoginComponent.vue';
import RegisterComponent from '../../components/forms/RegisterComponent.vue';

//Activate tools
const utilsStore = useUtilsStore();
const userStore = useUserStore();

//Functions
const closeModal = () => {
    utilsStore.authModal = false;
};
</script>

<template>
    <transition name="modal-fade">
        <div class="modal" v-if="utilsStore.authModal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <NewFormationComponent v-if="userStore.userRole == 'Admin'" />
                <h2 v-if="userStore.userRole == 'User'">Aún no tienes autorizaciones asignadas</h2>
                <div v-if="!userStore.userRole">
                    <LoginComponent v-if="utilsStore.isUser" />
                    <RegisterComponent v-else />
                </div>
            </div>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    .modal-content {
        background-color: white;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 50%;
        min-width: 50%;
        max-width: 40rem;
        margin: 0;
        box-shadow: 0 0 1em var(--color-tertiary);

        h2 {
            font-weight: 500;
            color: var(--color-accent);
        }
    }

    .close {
        color: var(--color-accent);
        float: right;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
    }
}
</style>
