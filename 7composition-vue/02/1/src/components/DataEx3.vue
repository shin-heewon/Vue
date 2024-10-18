<script setup>
import {reactive} from 'vue';

const state = reactive(//ref와 반환 형태가 다르다! 값 자체를 반응
    {
        count: 0,
    } 
)
console.log(state.count);

setTimeout(
    ()=>{
        state.count++;
    }, 4000
)
</script>
<template>
<h1>state : {{ state.count }}</h1>

</template>
