<script>
    export default {
        data () {
            return {
                numArray : [1,2,3,4,5,6,7,8,9,10],
            };
        },
        computed: {
           
            evenSum(){
                return this.numArray.filter((value)=>value%2==0).reduce((acc, cur)=> acc+cur, 0);
                //filter로 짝수만 저장 후 reduce를 통해 cur=현재값, acc=누적값?, 0에서부터 둘을 더해서 합을 구한다? 
            },
        }
    }
</script>

<template>
    <h1>{{ evenSum}}</h1>

</template>

<style>
</style>
