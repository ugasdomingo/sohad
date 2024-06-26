<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { useCourseStore } from '../../stores/course-store';

//Activate tools
const courseStore = useCourseStore();

//loadings
const loading = ref(false);

//Define variables
const courseName = ref('');
const description = ref('');
const initialDate = ref('');
const duration = ref('');
const price = ref('');
const location = ref('');
const coverImage = ref();
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
        formData.append('price', price.value);
        formData.append('location', location.value);
        formData.append('coverImage', coverImage.value);
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
            <q-input
                v-model="courseName"
                label="Nombre del curso"
                outlined
                required
            />
            <q-input
                v-model="initialDate"
                label="Fecha de inicio"
                type="date"
                outlined
                required
            />
            <q-input v-model="duration" label="Duración" outlined required />
            <q-input v-model="price" label="Precio" outlined required />
            <q-input v-model="location" label="Modalidad" outlined required />
            <q-input
                v-model="videoUrl"
                label="URL del video"
                outlined
                required
            />
            <q-file v-model="coverImage" outlined required label="Portada" />
            <q-editor
                v-model="description"
                :dense="$q.screen.lt.md"
                :toolbar="[
                    [
                        {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            list: 'only-icons',
                            options: ['left', 'center', 'right', 'justify'],
                        },
                        {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify'],
                        },
                    ],
                    [
                        'bold',
                        'italic',
                        'strike',
                        'underline',
                        'subscript',
                        'superscript',
                    ],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['print', 'fullscreen'],
                    [
                        {
                            label: $q.lang.editor.formatting,
                            icon: $q.iconSet.editor.formatting,
                            list: 'no-icons',
                            options: [
                                'p',
                                'h1',
                                'h2',
                                'h3',
                                'h4',
                                'h5',
                                'h6',
                                'code',
                            ],
                        },
                        {
                            label: $q.lang.editor.fontSize,
                            icon: $q.iconSet.editor.fontSize,
                            fixedLabel: true,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                                'size-1',
                                'size-2',
                                'size-3',
                                'size-4',
                                'size-5',
                                'size-6',
                                'size-7',
                            ],
                        },
                        {
                            label: $q.lang.editor.defaultFont,
                            icon: $q.iconSet.editor.font,
                            fixedIcon: true,
                            list: 'no-icons',
                            options: [
                                'default_font',
                                'arial',
                                'arial_black',
                                'comic_sans',
                                'courier_new',
                                'impact',
                                'lucida_grande',
                                'times_new_roman',
                                'verdana',
                            ],
                        },
                        'removeFormat',
                    ],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                    ['undo', 'redo'],
                    ['viewsource'],
                ]"
                :fonts="{
                    arial: 'Arial',
                    arial_black: 'Arial Black',
                    comic_sans: 'Comic Sans MS',
                    courier_new: 'Courier New',
                    impact: 'Impact',
                    lucida_grande: 'Lucida Grande',
                    times_new_roman: 'Times New Roman',
                    verdana: 'Verdana',
                }"
            />

            <q-btn
                type="submit"
                label="Crear Curso"
                color="primary"
                class="submit-button"
            />
        </form>
    </div>
</template>

<style scoped lang="scss">
.create-course {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    h2 {
        font-weight: 500;
        color: $accent;
    }

    form {
        display: flex;
        flex-direction: column;

        .q-input {
            margin: 0.5rem 0;
        }

        .q-editor {
            margin: 0.5rem 0;
        }

        button {
            margin: 0.5rem 0;
        }
    }
}

//Responsive
@media screen and (max-width: 768px) {
    //Scroll modal
    .create-course {
        width: 100%;
        padding: 2rem 1rem;

        h2 {
            font-size: 2rem;
            margin: 0;
        }

        form {
            width: 100%;
            box-sizing: border-box;
            input {
                margin: 0.5rem 0;
            }

            button {
                margin: 0.5rem 0;
            }
        }
    }
}
</style>
