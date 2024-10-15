<script>
    export default {
        data () {
            return {
                array:[0,1,2],
                obj:{name:'Heewon'},
            };
        },
        watch: {
           
            array:{
                handler(newVal, oldVal){
                    console.log(`old : ${oldVal}`);
                    console.log(`new : ${newVal}`);
                },
                deep: true,
                
            },
            obj:{
                handler(newVal, oldVal){
                    console.log(`old : ${JSON.stringify(oldVal)}`);
                    console.log(`new : ${JSON.stringify(newVal)}`);
                },
                deep: true,
            },
        }
    }
</script>

<template>
    <h1 style="color:greenyellow; font-style: italic;" >{{ array }}</h1><!--여기에 적용한 스타일 스코프가 더 좁으므로 공통으로 지정한 스타일이 적용되지 않음-->

    <h1>{{ obj }}</h1>

    <h2>{{ array }}</h2>

    <h1 style="color:salmon; font-style: italic;">{{ array }}</h1>
    
    <button type="button" @click="array.push(3)">배열값 숫자 추가</button>
    <button type="button" @click="obj.company = 'ssg.com'">객체 속성 추가</button><!--객체는 중복이 안되므로 한번만 추가됨-->
</template>

<style scoped>
@import './assets/main.css';
@import '@/assets/main.css';/**위 경로와 같은 말 */

    h1{
        color: cornflowerblue;
        font-style: oblique;
    }
</style>
