<script setup lang="ts">
//Import tools
import { ref, onMounted, onUnmounted } from 'vue';

//Activate tools
const isVisible = ref(false);

onMounted(() => {
    window.addEventListener('scroll', () => {
        isVisible.value = window.scrollY > 1000;
    });
});

onUnmounted(() => {
    window.removeEventListener('scroll', () => {
        isVisible.value = window.scrollY > 1400;
    });
});
</script>

<template>
    <section class="about-me" id="nosotros">
        <div class="left-content">
            <img
                src="img/portada.webp"
                alt="Sohad Aziz"
                :class="{ animation: isVisible }"
            />
        </div>
        <div class="right-content">
            <h2>Sobre mi</h2>
            <p>
                Hola, Soy la Dra. Sohad Aziz, experta en medicina estética y con
                una pasión por realzar la belleza natural a través de
                tratamientos no quirúrgicos.
            </p>
            <p>
                Mi enfoque se basa en equilibrar la ciencia médica con la
                individualidad de cada paciente, buscando que todos se sientan
                cómodos en su piel. Además de mis servicios, ofrezco cursos
                especializados para profesionales de la salud y esteticistas que
                deseen dominar las técnicas de tratamientos estéticos no
                quirúrgicos, compartiendo conocimientos, últimas investigaciones
                y un enfoque holístico. Bienvenidos a este espacio donde la
                salud y la belleza se unen para realzar la mejor versión de ti.
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-me {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 2rem;
    line-height: 1.5;
    h2 {
        font-size: 5rem;
        font-weight: 700;
        margin: 1rem 0 1.5rem;
        color: $primary;
    }
    p {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        color: $dark;
    }
    .right-content {
        width: 60%;
        padding: 0 1rem;
    }
    .left-content {
        width: 40%;
        padding: 0 1rem;
        img {
            max-height: 500px;
            object-fit: cover;
        }
    }
}
.animation {
    animation: moveInLeft 1s ease-out;
}

//Animaciones
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    80% {
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

//Responsive
@media screen and (max-width: 768px) {
    .about-me {
        flex-direction: column;
        padding: 1rem;

        h2 {
            font-size: 3rem;
            text-align: center;
            margin-top: 0;
        }
        .right-content {
            width: 100%;
        }
        .left-content {
            width: 100%;
            display: flex;
            justify-content: center;
            img {
                max-height: 300px;
                object-fit: cover;
            }
        }
    }
}
</style>
