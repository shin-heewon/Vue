<script>
    export default {
            data : function(){
                return{
                   user:{
                    name : 'ssg',
                    company : '신세계',
                    gender : 'male',
                    age : 30,
                   },
                };
                
            },
    }

</script>
<template>

    <h1 >user 객체 출력</h1> 
    <ul>
        <li v-for="(value, key, index) in user" :key="index">
            {{ index+1 }} : {{ key }} = {{ value }}
        </li> 
    </ul>

</template>
<style>
    .blue-color {
        color: blue;
    }
</style>