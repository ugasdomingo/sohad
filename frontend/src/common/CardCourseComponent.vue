<script setup lang="ts">
//Get data from props
defineProps({
    curso: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">{{ curso?.courseName }}</h2>
        </div>
        <div class="card-body">
            <p class="card-text">
                {{ curso?.description }}
            </p>
            <ul>
                <li v-for="item in curso?.benefits" :key="item">
                    {{ item }}
                </li>
            </ul>
        </div>
        <button>Comprar Formación</button>
    </div>
</template>

<style scoped lang="scss">
.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
    width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.card-header {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
}
.card-title {
    font-size: 1.5rem;
    font-weight: bold;
}
.card-body {
    width: 100%;
    padding: 1rem;
    overflow: hidden;
}
.card-text {
    font-size: 1rem;
    font-weight: 300;
}
ul {
    list-style: none;
    padding: 0;
}
li {
    font-size: 0.8rem;
    font-weight: 300;
}
button {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

@media (max-width: 768px) {
    .card {
        width: 100%;
    }
}
</style>
