
<script>
    export default{
        data(){
            return {
                inputMessage:'',
            }
        },
        methods:{
            addTodo(){
                //부모 컴포넌트 이벤트 호출
                this.$emit('add-todo', this.inputMessage);
                this.inputMessage = '';
            }
        },
        emits:['add-todo'],
    }
</script>

<template>
    <div class="todo__input">
        <input
          v-model="inputMessage" 
          type="text"
          class="todo__input-text"
          placeholder="할 일을 입력하세요."
          @keydown.enter="addTodo"
        />
        <button class="todo__input-btn" @click="addTodo">등록</button>
      </div>
</template>