<script>
export default{
    props:{
        product: {
            type: Object,
            required: true 
            }
    },
    data(){
        return {
            details :{},
        }
    },
    methods:{

        printDetail(product){
            console.log("상품 상세 정보:", product);

            this.details = {
                name: product.name,
                price: product.price,
                quantity: product.quantity,
            }
        }
    },
}

</script>

<template>
    <div>
        <h1>상품 상세 정보</h1>
        <ul>
            <li>상품 : {{ details.name }}</li>
            <li>가격 : {{ details.price}}</li>
            <li>재고 : {{  details.quantity}}</li>
        </ul>
    </div>

</template>