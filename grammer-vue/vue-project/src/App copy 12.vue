<script>
    export default {
            data (){
                return {
                    message : '',            
                };
            },
            methods:{
                onChangeHandler($event){
                    this.message = $event.target.value;//이벤트(변화)를 바로 감지!!
                },
            },
    }
</script>
<template>
    
    <input type="text" @input="onChangeHandler($event)">
    {{ message }}

</template>
<style>
   
</style>