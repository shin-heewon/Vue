<script setup>
  import {ref} from 'vue';

  const inputRef = ref(null);

  setTimeout(
    ()=>{
      console.log(inputRef.value);//DOM 객체를 참조하여 확인
      console.log(inputRef.value.innerText);
    }, 1000
  )

</script>
<template>
  <h1 ref="inputRef">Hello, Ref!</h1>
</template>
