<script setup>
import {ref} from 'vue';//뷰 라이브러리로부터 ref import해야만 사용 가능함

const arr1 = ref([10]);//배열로 반응형 데이터 생성
const arr2 = ref([10]);

setTimeout(
  ()=> {
    arr1.value = [10,20];//값 자체를 변경
  }
)

setTimeout(
  ()=> {
    arr2.push(20);//값 자체를 변경한 것이 아니라 요소값만 변경함.
    //즉, 배열은 반응형 데이터가 할당된 변수의 값 자체가 변경되면 반응하지만, 배열 안의 요소가 변경되면 반응하지 않는다.
  }
)

</script>
<template>
  <h1>arr1: {{ arr1 }}</h1>
  <h1>arr2 : {{ arr2 }}</h1>
</template>
