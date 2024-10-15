<script>
    export default {

            data (){
                return {
                    fruits: ['orange', 'pear', 'grape'],//체크박스 체크됐을 때는 true, 아니면 false
                    gender:['female', 'male'],
                };
            },
            methods:{
            
                printData(){
                    //event.preventDefault();  // 폼 제출 시 페이지 리로드 방지
                    console.log(`선택값 : ${this.fruits}`);
                },
                printData2(){
                    
                    console.log(`선택값 : ${this.gender}`);
                },
            },

           
    }

</script>
<template>
    <form id="loginForm1">
        
        <input type="checkbox" id="fruit" v-model="fruits" value="orange">오렌지
        <input type="checkbox" id="fruit" v-model="fruits" value="pear">배
        <input type="checkbox" id="fruit" v-model="fruits" value="grape">포도

        <button type="button" @click="printData">버튼</button>
    </form>

    <form id="loginForm2">
        
        <input type="radio" v-model="gender" value="female">여성
        <input type="radio" v-model="gender" value="male">남성
    

        <button type="button" @click="printData2">버튼</button>
    </form>

</template>
<style>
   
</style>