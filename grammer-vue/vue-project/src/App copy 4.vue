<script>
    export default {
            data : function(){
                return{
                   fruits: ['apple', 'banana', 'pear', 'orange'],
                };
                
            },
    }

</script>
<template>

    <h1 >fruits 데이터의 반복 결과 출력</h1> 
    <ul>
        <li v-for="(fruit, index) in fruits" :key="index">
            인덱스 : {{ index }}, 과일 : {{ fruit }}
        </li> 
    </ul>

</template>
<style>
    .blue-color {
        color: blue;
    }
</style>