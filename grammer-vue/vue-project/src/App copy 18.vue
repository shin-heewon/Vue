<script>
    export default {
        data () {
            return {
                firstName : 'Heewon',
                lastName : 'Shin',
            };
        },
        computed: {
           
            fullName(){
                console.log('computed FullName');
                return `${this.lastName} ${this.firstName}`;
            },
        }
    }
</script>

<template>
    <h1>{{ lastName }} {{ firstName }}</h1>

    <hr>
    
    <h1>{{fullName}}</h1>
    <h1>{{fullName}}</h1><!--computed 속성은 한 번 참조한 데이터를 캐싱하여 두 번 호출했지만 콘솔 창에는 한 번만 찍힌다.-->
</template>

<style>
</style>
