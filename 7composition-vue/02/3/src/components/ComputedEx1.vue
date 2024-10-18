<script setup>

import {computed, ref, reactive} from 'vue'

const refCount = ref(0);
const reactiveCount = reactive({count:3,});

const refDoubleCount = computed(()=>refCount.value+2);

const reactiveDoubleCount = computed(()=>reactiveCount.count*2);

//computed() 처리한 데이터는 객체를 반환하기 때문에 콘솔 창에서 출력할 때 value 사용해야 한다.
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);

</script>
<template>
  <h1>{{ refDoubleCount }}</h1><!--템플릿 태그 내부에서 자동 언래핑 되므로 value로 접근 안 해도 값을 볼 수 있다.-->
  <h1>{{ reactiveDoubleCount}}</h1>
</template>
