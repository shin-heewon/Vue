<script setup>
import {computed, ref, reactive} from 'vue'

const refCount = ref(0);
const reactiveCount = reactive({count:3,});

const refDoubleCount = computed({
    get(){
      return refCount.value+2;
    
    },set(newValue){
      refCount.value = newValue;
    }
  }
)
const reactiveDoubleCount = computed(
  {get(){
      return reactiveCount.count*2;
    },
    set(newValue){
      reactiveCount.count = newValue;
    }
  }
);

//computed() 처리한 데이터는 객체를 반환하기 때문에 콘솔 창에서 출력할 때 value 사용해야 한다.
console.log('예제4',refDoubleCount.value);
console.log('예제4',reactiveDoubleCount.value);

setTimeout(()=>{
  refCount.value = 5;
  console.log('예제4',refDoubleCount.value);

  reactiveCount.count = 10;
  console.log('예제4',reactiveDoubleCount.value);//20 출력됨
},3000)
</script>
<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>
