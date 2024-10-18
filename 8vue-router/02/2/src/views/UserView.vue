<script setup>
import {onBeforeMount} from 'vue'
import { userRoute } from 'vue-router'

const route = userRoute();

onBeforeMount(//컴포넌트가 마운트 되기 전에 쿼리스트링 값 받을 수 있다~
    () => {
        const name = route.query.name;
        const age = route.query.age;

        console.log(name);
        console.log(age);
    }

)

</script>
<template>
    <h1>{{ name }}</h1>

</template>