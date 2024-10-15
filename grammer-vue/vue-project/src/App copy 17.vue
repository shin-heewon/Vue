<script>
    export default {
        data () {
            return {
        
                result: '' ,
            };
        },
        methods: {
            onChangeHandler($event) {
               
                this.result = $event.target.value;
                console.log('keyup event!!');
            }
        }
    }
</script>

<template>
    <input type="text" @keyup="onChangeHandler">
    {{ result }}
</template>

<style>
</style>
