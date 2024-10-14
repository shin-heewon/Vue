<script>
    export default {
            data : function(){
                return{
                   condition : 'A',
                }
                
            },



        

        // data(){ 자바 스크립트 형태로, 위 3~5번 코드(옵션스 API방식으로 작성)와 완전히 같은 의미이다.
        //     return {};
        // },

    }

</script>
<template>

    <h1 v-if="condition === 'A'">Hello VueJS 1</h1>
    <h1 v-else-if="condition === 'B'">Hello VueJS 2</h1> 
    <h1 v-else="condition === 'C'">Hello VueJS 3</h1> 

</template>
<style>
    .blue-color {
        color: blue;
    }
</style>