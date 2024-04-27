<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/cursos">
            <img src="../assets/course-icon.svg" alt="icono cursos" />
            <h3>Cursos</h3>
        </RouterLink>
        <RouterLink to="/blog">
            <img src="../assets/blog-icon.svg" alt="icono blog" />
            <h3>Blog</h3>
        </RouterLink>
        <RouterLink to="sobre-mi">
            <img src="../assets/about-icon.svg" alt="icono contacto" />
            <h3>Sobre mi</h3>
        </RouterLink>
        <section class="social">
            <h3>Contáctame</h3>
            <div>
                <a
                    href="https://www.instagram.com/estheticsohad"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon"
                >
                    <img src="src/assets/instagram.svg" alt="Instagram" />
                </a>
                <a
                    href="https://wa.me/584126696619"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon"
                >
                    <img src="src/assets/whatsapp.svg" alt="WhatsApp" />
                </a>
                <a
                    href="mailto:"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="icon"
                >
                    <img src="src/assets/letters.svg" alt="email" />
                </a>
            </div>
        </section>
        <q-btn class="btn" to="/escritorio" label="Acceder" />
    </nav>
</template>

<style scoped lang="scss">
nav {
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
    box-sizing: border-box;
    position: relative;

    a {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
        text-decoration: none;
        color: $dark;
        h3 {
            font-size: 1.25rem;
        }
        img {
            width: 30px;
            height: 30px;
        }
    }
    .social {
        flex-direction: column;
        align-items: center;
        gap: 0;
        h3 {
            font-size: 1.25rem;
            font-weight: 700;
            text-align: center;
            color: $secondary;
            text-decoration: underline;
        }
        div {
            display: flex;
            justify-content: space-between;

            .icon {
                width: 3.5rem;
                height: 3.5rem;
                margin: 0 1rem;
                transition: all 0.3s ease-in-out;
                &:hover {
                    transform: scale(1.2);
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .btn {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background-color: $primary;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        position: absolute;
        bottom: 0;
        margin: 0 auto;
    }
}
</style>
