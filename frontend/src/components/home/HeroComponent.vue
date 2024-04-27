<script setup lang="ts"></script>

<template>
    <!-- Hero img -->
    <section class="hero-section">
        <img src="img/hero.webp" alt="Hero" class="img-hero-big" />
        <div class="left-content">
            <h6>Formación en Medicina Estética</h6>
            <h1>Dra. Sohad Aziz</h1>
            <p>
                Mantente a la vanguardia de los tratamientos estéticos no
                quirúrgicos
            </p>
        </div>
        <div class="right-content">
            <img src="img/dra-portada-sf.webp" alt="foto-doctora" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.hero-section {
    width: 100%;
    height: 100vh;
    margin-top: -5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;
}
//The styles for the hero image
.img-hero-big {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.left-content {
    width: 50%;
    transform: translate(0, 0);
    z-index: 1;
    color: $secondary;
    animation: moveInLeft 1s ease-out;

    h1 {
        font-size: 7rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    h6 {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 6px;
        font-weight: 400;
        margin: 1rem 0;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        margin: 1rem 0;
        color: $dark;
    }
}
.right-content {
    width: 50%;
    text-align: right;
    transform: translate(0, 0);
    z-index: 1;
    animation: moveInRight 1s ease-out;

    img {
        width: 80%;
        object-fit: cover;
    }
}
//Animations
@keyframes moveInLeft {
    0% {
        opacity: 0;
        transform: translateX(10rem);
    }
    80% {
        transform: translateX(1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@keyframes moveInRight {
    0% {
        opacity: 0;
        transform: translateX(-10rem);
    }
    80% {
        transform: translateX(-1rem);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

@media screen and (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        height: auto;
        padding: 5.5rem 1rem 0;
    }
    .left-content {
        width: 100%;
        text-align: center;
        margin-bottom: 2rem;

        h1 {
            font-size: 3.5rem;
        }

        h6 {
            font-size: 1.2rem;
        }
    }
    .right-content {
        width: 100%;
        text-align: center;
    }
}
</style>
