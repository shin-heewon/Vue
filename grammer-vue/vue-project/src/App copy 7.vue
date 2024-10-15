<script>
    export default {
            methods : {
                onKeyupHandler(event){
                    if(event.keyCode =13){
                        alert("enter키 누름~~");
                    }
                },
                onKeyupHandler1(){
                    console.log("enter키 잘 누름");
                },
              
            },
    }

</script>
<template>
<input type="text" @keyup="($event)=>onKeyupHandler($event)">
<br>
<input type="text" @keyup.enter="onKeyupHandler1">



</template>
<style>
    .blue-color {
        color: blue;
    }
</style>