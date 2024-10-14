<script>
    export default {// 컴포넌트 전반에 걸쳐서 사용할 수 있다~
        // data : function(){
        //   return {
        //     //name : 'ssg', age: 20, //변수, 데이터, 데이터 속성 등으로 부른다.

        //     message : '<h1>Hello VueJS</h1>',

       //};  
//},
            data : function(){
                return{
                    // className : 'blue-color',

                    visible : true,
                    unvisible : false,

                }
                
            },



        

        // data(){ 자바 스크립트 형태로, 위 3~5번 코드(옵션스 API방식으로 작성)와 완전히 같은 의미이다.
        //     return {};
        // },

    }

</script>
<template>
    <!-- <p>내 이름은 {{ name }} 입니다.머스태치 신택스(mustach syntax) 표기법</p> -->
    
   <!-- <p>나이는 {{ age }}살 입니다.</p> -->
    <div v-html="message"></div>
    <div v-pre>{{ message }} <- 컴파일 되지 않아 단순 텍스트로 처리된다</div> 
    <!-- {{ message }} -->

    <h1 v-bind:class="className">Hello!</h1>

    <h1 v-if="visible">Hello VueJS1</h1>
    <h1 v-if="unvisible">Hello VueJS2</h1> 

</template>
<style>
    .blue-color {
        color: blue;
    }
</style>