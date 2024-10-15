<script>
    export default {

            data (){
                return {number : 0,};
            },

            methods : {
                onKeyupHandler(event){
                    if(event.keyCode =13){
                        alert("enter키 누름~~");
                    }
                },
                onKeyupHandler1(){
                    console.log("enter키 잘 누름");
                },
                incresement(){
                    this.number++;//this 키워드를 사용해서 data 값을 참고한다.
                },
              
            },
    }

</script>
<template>
<input type="text" @keyup="($event)=>onKeyupHandler($event)">
<br>
<input type="text" @keyup.enter="onKeyupHandler1">
<br>
<h1>{{ number }}</h1> <br>
<h1 v-once>{{ number }}</h1>
<button type="button" @click="incresement">숫자 증가</button><!--뷰가 변화되는 부분을 감지해서 해당 부분만 업데이트 한다.-->



</template>
<style>
    .blue-color {
        color: blue;
    }
</style>