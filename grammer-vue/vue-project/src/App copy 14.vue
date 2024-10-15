<script>
    export default {
            data (){
                return {
                    message : '',            
                };
            },
            methods:{
                onSubmitHandler(e){
                    e.preventDefault();//폼 태그 이벤트를 해지(디폴트 처리)하는 메소드 => 별도의 폼 전송 처리하겠다~
                    console.log('Onsubmit Handler!!');
                },
            },
    }
</script>
<template>
    
    <form @submit="onSubmitHandler">
        <button type="submit">버튼</button>
    </form>
</template>
<style>
   
</style>