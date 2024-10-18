<script setup>
import {ref} from 'vue';//뷰 라이브러리로부터 ref import해야만 사용 가능함

  const count = ref(0);//기본 자료형 사용, 객체값으로 반환됨=> .value 형태를 지님
  const state = ref(
    {
      count : 0, //참조 자료형 사용 
    }
  );

  setTimeout(
    ()=>{
      count.value++;
    }, 1000
  );
  setTimeout(
    ()=>{
      state.count++;//값 변화 없음!!
    }, 2000
  );
  setTimeout(
    ()=>{
      state.value.count++;
    }, 3000
  );

  //반응성이 유지되는 범위에 주목
  //ref() 함수로 생성되어진 반응형 데이터는 
  
  console.log(count.value); // 래핑된 형태이기 때문에 값을 보려면 .value로 접근해야 값을 볼 수 있다.
  console.log(state.value.count);
</script>
<template>
  <h1>count : {{ count }}</h1><!--count.value로 접근해야 하지만 생략된 상태로, template 태그 내부에서는 자동 언래핑 상태로 제공되어 에러 없이 바로 값을 볼 수 있다. -->
  <h1>state : {{ state.count }}</h1>
</template>
