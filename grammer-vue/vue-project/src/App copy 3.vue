<script>
    export default {
            data : function(){
                return{
                   condition : true,
                }
                
            },
    }

</script>
<template>

    <h1 v-show="condition">Hello VueJS 1</h1>
    <h1 v-show="!condition">Hello VueJS 2</h1> 

</template>
<style>
    .blue-color {
        color: blue;
    }
</style>