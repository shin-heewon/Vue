<script setup>

import { useRoute, useRouter } from 'vue-router';
const route = useRoute();

const id = route.params.id;

//useRoute.params.id;//6번 줄과 같은 의미임

console.log(id);//가져온 아이디 출력

</script>

<template>
    <h1>id : {{ id }}</h1>
</template>

