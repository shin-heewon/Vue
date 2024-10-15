<script>
    export default {
            methods : {
                clickHandler(){
                    alert('click event!');
                },
                clickHandler2(){
                    alert('더블클릭');
                },
                clickHandler3(event){
                    console.log(event,'이벤트 핸들러에 매개변수로 직접 $event 넘기지 않아도 실제로는 이벤트 객체를 매개변수로 넘겨줌');
                },
                clickHandler4(event,message){//이벤트를 매개변수로 받지 않으면 
                    console.log(event)
                    console.log(message);
                },
            },
    }

</script>
<template>
<button type="button" v-on:dblclick="clickHandler">버튼1</button>
<br>
<button type="button" @dblclick="clickHandler2">버튼2</button><!--@ 기호를 사용해서 표현 가능함-->
<br>
<button type="button" v-on:dblclick="clickHandler3($event)">버튼3</button>
<br>
<button type="button" @click="($event)=>clickHandler4($event, message)">버튼4</button><!--이벤트객체와 메시지와 같은 스트링 값을 같이 넘겨줘야 이벤트 객체와 메시지를 함께 처리할 수 있다.-->
<br>


</template>
<style>
    .blue-color {
        color: blue;
    }
</style>