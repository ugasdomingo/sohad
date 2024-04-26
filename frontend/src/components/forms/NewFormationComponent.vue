<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useCourseStore } from '../../stores/course-store';

//Activate tools
const courseStore = useCourseStore();

//loadings
const loading = ref(false);

//Deefine Inteerfaces
export interface ICourse {
    _id: string;
    courseName: string;
    description: string;
    initialDate: string;
    duration: string;
    finalDate: string;
    price: string;
    location: string;
    coverImage: {
        public_id: string;
        secure_url: string;
    };
    videoUrl: string;
}

//Define variables
const courseName = ref('');
const description = ref('');
const initialDate = ref('');
const duration = ref('');
const finalDate = ref('');
const price = ref('');
const location = ref('');
const coverImage = ref<File | null>(null);
const videoUrl = ref('');

//Functions
const handleSubmit = async () => {
    try {
        loading.value = true;

        const formData = new FormData();
        formData.append('courseName', courseName.value);
        formData.append('description', description.value);
        formData.append('initialDate', initialDate.value);
        formData.append('duration', duration.value);
        formData.append('finalDate', finalDate.value);
        formData.append('price', price.value);
        formData.append('location', location.value);
        formData.append('coverImage', coverImage.value as File);
        formData.append('videoUrl', videoUrl.value);

        await courseStore.createCourse(formData);

        alert('Curso creado correctamente');
    } catch (error) {
        console.log(error);
        alert('Error al crear el curso');
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <div class="create-course">
        <h2>Crear curso</h2>
        <form @submit.prevent="handleSubmit">
            <div class="input-group">
                <input
                    type="text"
                    id="courseName"
                    v-model="courseName"
                    required
                    placeholder="Nombre del Curso"
                />
                <input
                    type="text"
                    id="initialDate"
                    v-model="initialDate"
                    required
                    placeholder="Fecha de inicio"
                />
                <input
                    type="text"
                    id="duration"
                    v-model="duration"
                    required
                    placeholder="Duración"
                />
                <input
                    type="text"
                    id="finalDate"
                    v-model="finalDate"
                    required
                    placeholder="Fecha de finalización"
                />
                <input type="text" id="price" v-model="price" required placeholder="Precio" />
                <input
                    type="text"
                    id="location"
                    v-model="location"
                    required
                    placeholder="Ubicación"
                />
                <input
                    type="file"
                    id="coverImage"
                    @change="coverImage = $event.target?.files[0] || null"
                    required
                />
                <input
                    type="text"
                    id="videoUrl"
                    v-model="videoUrl"
                    required
                    placeholder="URL del video"
                />
            </div>

            <button type="submit" :disabled="loading">Crear curso</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.create-course {
    width: 70%;
    margin: 2rem auto;
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
        width: 100%;
        gap: 1.5rem;

        .input-group {
            display: flex;
            flex-direction: column;

            label {
                font-weight: 500;
                color: var(--color-accent);
            }

            input,
            textarea {
                padding: 0.5rem;
                border-radius: 0.5rem;
                border: 1px solid var(--color-accent);
                margin: 0.5rem 0;
            }
        }

        button {
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid var(--color-accent);
            margin: 0.5rem 0;
            background-color: var(--color-accent);
            color: white;
            font-weight: 500;
            cursor: pointer;
        }
    }
}

.ck-editor__editable {
    min-height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

//Responsive
@media screen and (max-width: 768px) {
    //Scroll modal
    .create-course {
        width: 100%;
        overflow-y: scroll;
        max-height: 80vh;
    }
}
</style>
