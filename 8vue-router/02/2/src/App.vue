<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>
<template>
  <nav>
    <RouterLink to="/"></RouterLink>
    <RouterLink to="/user"/><!--a태그의 기능과 같이 동작함-->
    
    
  </nav>

  <RouterView/>
</template>
