<script>
import ProductList from '@/components/ProductList.vue'


export default{
  data(){
    return {
      products : [
        {name:'바나나', price:1000, quantity:10},
        {name:'오렌지', price:2000, quantity:6}, 
        {name:'딸기', price:3000, quantity:33}, 
        {name:'복숭아', price:4000, quantity:5},
      ],
    }
  },
  components:{
    ProductList,

  },

}

</script>

<template>
  <ProductList :products=products></ProductList>

</template>

<style>

</style>
