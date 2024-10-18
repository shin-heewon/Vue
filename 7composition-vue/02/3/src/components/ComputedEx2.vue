<script setup>

import {computed, ref, reactive} from 'vue'

const refCount = ref(0);
const reactiveCount = reactive({count:3,});

const refDoubleCount = computed(()=>refCount.value+2);

const reactiveDoubleCount = computed(()=>reactiveCount.count*2);

//computed() 처리한 데이터는 객체를 반환하기 때문에 콘솔 창에서 출력할 때 value 사용해야 한다.
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

setTimeout(()=>{
  reactiveCount.count = 20;
  console.log(reactiveDoubleCount.value);//40 출력됨
},1000)

</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
