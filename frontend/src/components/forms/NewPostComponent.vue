<script setup lang="ts">
//Import tools
import { ref } from 'vue';
import { usePostStore } from 'src/stores/post-store';

//Activate tools
const postStore = usePostStore();

//Define variables
const title = ref('');
const content = ref('');
const coverImage = ref();

//Functions
const handleSubmit = async () => {
    try {
        const formData = new FormData();
        formData.append('title', title.value);
        formData.append('content', content.value);
        formData.append('coverImage', coverImage.value);

        await postStore.createPost(formData);

        alert('Post creado correctamente');
    } catch (error) {
        console.log(error);
        alert('Error al crear el post');
    }
};
</script>

<template>
    <div class="new-post">
        <h2>Crear post</h2>
        <form @submit.prevent="handleSubmit">
            <q-input
                v-model="title"
                label="Título del post"
                outlined
                required
            />
            <q-editor
                v-model="content"
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
            <q-file
                v-model="coverImage"
                label="Imagen de portada"
                outlined
                required
            />
            <q-btn
                type="submit"
                label="Crear post"
                color="primary"
                class="submit-button"
            />
        </form>
    </div>
</template>

<style scoped lang="scss">
.new-post {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 4rem 2rem;
    margin: 2rem 0;

    h2 {
        text-align: center;
        font-size: 5rem;
        font-weight: 700;
        margin: 1rem 0;
        color: $primary;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;

        .submit-button {
            align-self: center;
        }
    }
}

@media screen and (max-width: 768px) {
    .new-post {
        padding: 2rem 1rem;
        h2 {
            font-size: 3rem;
            text-align: center;
        }
    }
}
</style>
