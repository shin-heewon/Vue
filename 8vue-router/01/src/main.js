import { createApp } from 'vue';
import App from './App.vue';
import router from './router';//라우터 인스턴스를 생성하는 파일이 있는 디렉토리 전체를 import 해 줌(src/router/index.js 파일을 불러오라는 의미)



const app = createApp(App);

app.use(router);

app.mount('#app');
