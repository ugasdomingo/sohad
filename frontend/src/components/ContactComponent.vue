<script setup lang="ts"></script>

<template>
    <section class="contact">
        <h2>Contáctame</h2>
        <div class="icon-container">
            <a
                href="https://www.instagram.com/sohadaziz/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="../assets/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://wa.me/573016000000" target="_blank" rel="noopener noreferrer">
                <img src="../assets/whatsapp.svg" alt="WhatsApp" />
            </a>
            <a
                href="https://www.youtube.com/channel/UCZ2ZQ4Z0Z2Y5Z9Z2ZQZ2Z2Q"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="../assets/letters.svg" alt="email" />
            </a>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    line-height: 1.5;
    background: linear-gradient(
        45deg,
        rgba(140, 105, 62, 0.6) 0%,
        rgba(140, 105, 62, 0.6) 35%,
        rgba(191, 144, 4, 0.65) 100%
    );
    h2 {
        font-size: 5rem;
        font-weight: 700;
        margin: 1rem 0;
        color: var(--color-primary);
    }
    .icon-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
        img {
            width: 3rem;
            height: 3rem;
            margin: 0 1rem;
            transition: all 0.3s ease-in-out;
            &:hover {
                transform: scale(1.2);
            }
        }
    }
}
</style>
