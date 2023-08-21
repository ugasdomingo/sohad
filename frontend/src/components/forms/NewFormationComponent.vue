<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useCourseStore } from '../../stores/course-store';

//Activate tools
const courseStore = useCourseStore();

//loadings
const loading = ref(false);

//Get data
const courseName = ref('');
const description = ref('');
const initialDate = ref('');
const duration = ref('');
const price = ref('');
const location = ref('');
const coverImage = ref();
const videoUrl = ref('');

//Functions
const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    coverImage.value = file;
};

const handleSubmit = async () => {
    try {
        loading.value = true;

        const formData = new FormData();
        formData.append('courseName', courseName.value);
        formData.append('description', description.value);
        formData.append('initialDate', initialDate.value);
        formData.append('duration', duration.value);
        formData.append('price', price.value);
        formData.append('location', location.value);
        formData.append('coverImage', coverImage.value);
        formData.append('videoUrl', videoUrl.value);

        await courseStore.createCourse(formData);

        courseName.value = '';
        description.value = '';
        initialDate.value = '';
        duration.value = '';
        price.value = '';
        location.value = '';
        videoUrl.value = '';

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
                <label for="courseName">Nombre del curso</label>
                <input type="text" id="courseName" v-model="courseName" required />
            </div>
            <div class="input-group">
                <label for="description">Descripción</label>
                <textarea id="description" v-model="description" required />
            </div>
            <div class="input-group">
                <label for="initialDate">Fecha de inicio</label>
                <input type="date" id="initialDate" v-model="initialDate" required />
            </div>
            <div class="input-group">
                <label for="duration">Duración</label>
                <input type="text" id="duration" v-model="duration" />
            </div>
            <div class="input-group">
                <label for="price">Precio</label>
                <input type="text" id="price" v-model="price" />
            </div>
            <div class="input-group">
                <label for="location">Ubicación</label>
                <input type="text" id="location" v-model="location" required />
            </div>
            <div class="input-group">
                <input @change="handleImageUpload" type="file" placeholder="Portada" required />
            </div>
            <div class="input-group">
                <label for="videoUrl">Video de presentación</label>
                <input type="text" id="videoUrl" v-model="videoUrl" />
            </div>
            <button type="submit" :disabled="loading">Crear curso</button>
        </form>
    </div>
</template>

<style scoped lang="scss">
.create-course {
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
