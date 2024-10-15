<script>
    export default {

            data (){
                return {
                    beverage: ['americano', 'latte', 'vanila'],
                    
                };
            },
            methods:{
            
                printData(){
                    //event.preventDefault();  // 폼 제출 시 페이지 리로드 방지
                    console.log(`선택값 : ${this.beverage}`);
                },
               
            },

           
    }

</script>
<template>
    <form id="loginForm1">
        
        <select v-model="beverage">
            <option id="americano">아메리카노</option>
            <option id="latte">카페라떼</option>
            <option id="vanila">바닐라라떼</option>
        </select>
        <button type="button" @click="printData">버튼</button>
    </form>

   

</template>
<style>
   
</style>