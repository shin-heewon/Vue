<script>
    export default {

            data (){
                return {
                    name : '신세계',
                    gender : 'male',
                    age : 20,
                };
            },

           
    }

</script>
<template>
    <div v-memo="[name, gender]">
        <p>이름 : {{ name }}</p>
        <p>성별 : {{ gender }}</p>
        <p>나이 : {{ age }}</p>
    </div>

    <p>나이 : {{ age }}</p>

    <button type="button" @click="name='수정'">이름변경</button>
    <button type="button" @click="gender='female'">성별변경</button>
    <button type="button" @click="age=30">나이변경</button><!--실제 나이는 값 변경이 되었으나, v-memo에 age는 포함되어있지 않기 때문에 화면에서 렌더링이 일어나지 않음 -->



</template>
<style>
   
</style>