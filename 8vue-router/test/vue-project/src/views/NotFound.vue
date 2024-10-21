<!-- <script setup>
    import { onBeforeRouteUpdate, useRoute } from 'vue-router';
    import { ref, watch } from 'vue';

    const url = ref('')

    onBeforeRouteUpdate(async (to, from)=>{

        url.value = await fetch(to.params.noPath);
        
        console.log('출력', url.value);
    });

    const route = useRoute()

    watch(
    () => route.params.noPath,
        (newPath, oldPath) => {
            console.log(newPath)
            console.log('밸류',newPath.value)

            console.log(oldPath)
            console.log('old밸류',oldPath.value)
        }
    )
</script>

<template>
    <h1>Not Found page</h1>
    <h3>출력값 : {{ url }}</h3>

</template> -->



<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute();
    const url = ref('');

    const updateUrl = () => {
        const path = route.params.noPath;
        if (Array.isArray(path)) {
            url.value = '/' + path.join('/');
        } else if (typeof path === 'string') {
            url.value = '/' + path;
        } else {
            url.value = route.fullPath;
        }
        console.log('출력', url.value);
    };

    onMounted(updateUrl);

    watch(
      () => route.params.noPath, //route.params.noPath의 변화를 감시
      updateUrl, //변화가 있으면 updateUrl메소드 실행
      { immediate: true }//
      );
</script>

<template>
    <h1>찾을 수 없는 페이지</h1>
    <h3>출력값 : {{ url }}</h3>
</template>



<!-- 
<template>
    <h1>Not Found page</h1>
    <h3>출력값 : {{ url }}</h3>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { onBeforeRouteUpdate } from 'vue-router';
  
  const url = ref(''); // 반응형 변수 선언
  
  onBeforeRouteUpdate(async (to, from) => {
    console.log('Entering NotFound component'); // 진입 로그
    console.log('Route params:', to.params.noPath); // 경로 파라미터 확인
  
    const path = to.params.noPath; // 경로를 path에 설정
    if (!path) {
      url.value = 'No path parameter found';
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/some-endpoint/${path}`);
      console.log('Fetch response:', response); // Response 객체 출력
  
      if (response.ok) {
        url.value = await response.text(); // 데이터를 텍스트로 변환하여 url에 저장
      } else {
        url.value = 'Error: ' + response.status; // 오류 상태 출력
      }
    } catch (error) {
      url.value = 'Fetch failed: ' + error.message; // 오류 메시지 출력
    }
  });
  </script>
   -->
