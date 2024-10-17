<script>
import ProducDetail from './ProducDetail.vue';

    export default{
        props:{
            products: {
                Array
            }
        },
        components:{
            ProducDetail
        },
        data(){
            return {
                selectedProduct : null,
                visible : false,
            }
        },
        methods:{
            showDetail(product) {
                
                this.selectedProduct = product;
                this.$refs.detail.printDetail(product);
                if(this.selectedProduct !== null){
                    visible = true;
                }
                }
        }
    }


</script>

<template>
     <div>
    <h2>상품 목록</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <a @click="showDetail(product)" href="javascript:void(0)">
            {{ product.name }}: {{ product.price }}원
        </a>
      </li>
    </ul>
  </div>

  <ProducDetail ref="detail" :product="selectedProduct" v-if="visible"></ProducDetail>

</template>