<script>
    export default {

            data (){
                return {
                    uid : '',
                    upwd: '',
                    message : '',
                };
            },
            methods:{
                login(){
                    event.preventDefault();  // 폼 제출 시 페이지 리로드 방지
                    console.log(`id: ${this.uid}`);
                    console.log(`pw : ${this.upwd}`);
                },
                printData(){
                    event.preventDefault();  // 폼 제출 시 페이지 리로드 방지
                    console.log(`message : ${this.message}`);
                },
            },

           
    }

</script>
<template>
    <form id="loginForm1">
        
        <label for="uid">ID</label>
        <input type="text" id="uid" v-model="uid"><br>
        
        <label for="upwd">password</label>
        <input type="password" id="upwd" v-model="upwd">
        <br>

        <textarea v-model="message"></textarea>
        <button type="button" @click="printData">데이터 출력</button>


    </form>


    <form id="loginForm2">
        
   
    </form>
</template>
<style>
   
</style>