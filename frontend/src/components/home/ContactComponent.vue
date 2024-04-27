<script setup lang="ts"></script>

<template>
    <section class="contact" id="contacto">
        <img src="img/hero.webp" alt="Hero" class="img-hero-big" />
        <h2>Contáctame</h2>
        <div class="icon-container">
            <a
                href="https://www.instagram.com/estheticsohad"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="icons/instagram.svg" alt="Instagram" />
            </a>
            <a
                href="https://wa.me/584126696619"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="icons/whatsapp.svg" alt="WhatsApp" />
            </a>
            <a href="mailto:" target="_blank" rel="noopener noreferrer">
                <img src="icons/letters.svg" alt="email" />
            </a>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 4rem 2rem;
    line-height: 1.5;
    background: linear-gradient(
        10deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 85%,
        rgba(191, 144, 4, 0.5) 100%
    );
    h2 {
        text-align: center;
        font-size: 5rem;
        font-weight: 700;
        margin: 1rem 0;
        color: $primary;
    }
    .icon-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        gap: 3rem;
        img {
            width: 3.5rem;
            height: 3.5rem;
            margin: 0 1rem;
            transition: all 0.3s ease-in-out;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
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

//Responsive
@media screen and (max-width: 768px) {
    .contact {
        padding: 2rem 1rem;
        h2 {
            font-size: 3rem;
        }
        .icon-container {
            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }
}
</style>
