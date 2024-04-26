//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUtilsStore = defineStore('utils', () => {
    const authModal = ref(false);
    const courseModal = ref(false);
    const simpleCourseInfo = ref(null);
    const isUser = ref(true);

    return {
        authModal,
        courseModal,
        simpleCourseInfo,
        isUser
    };
});
