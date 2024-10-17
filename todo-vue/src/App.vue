<script >

import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

  export default{
    components:{
      TodoHeader,
      TodoInput,
      TodoList,
    },
    data(){
      return {
        todo:[],
        currentData : 'all',//현재 목록 상태를 관리 할 수 있도록 정의한 데이터
      }
    },
    methods:{
      addTodoList(inputMessage){
        const item = {
          id : Math.random(),//메시지 관리를 위한 고유 번호
          msg : inputMessage,
          completed : false,
        };
        this.todo.push(item);//배열에 추가
        console.log(this.todo)
      },
      updateTab(tab){
        this.currentData = tab;
      },
    },
  }
</script>

<template>
  <div class="todo">
    <!-- <TodoHeader :currentData="currentData"/> -->
    <TodoHeader :currentData @update-tab="updateTab"/><!--정의한 currentData 데이터를 Todoheader 컴포넌트에 전달-->
    <TodoList></TodoList>
    
    <TodoInput @add-todo="addTodoList"></TodoInput>
  
  </div>

</template>