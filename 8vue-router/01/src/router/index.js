import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

//라우터 구성 객체
const router = createRouter(
    {
        history: createWebHistory(),
        routes : [
            {
                path:'',
                name: 'home',
                component:HomeView,//static import 방식-> 화면에 렌더링하는 경로가 아니어도 메모리에 올라가는 시작 시점에서 바로 로드됨(일반적으로 루트 경로만 정적 import 방식을 이용한다.)
                //router폴더 하위의 index.js 파일은 해당 뷰를 연결하겠다는 느낌
                //화면에 렌더링하는 시점을 어플리케이션 시작 시점에서 컴포넌트를 메모리에 로드한다.
            },
            {
                path:'/about',
                name:'about',
                component:()=>import('../views/AboutView.vue'),//동적으로 import(dynamic import 방식)
                //해당 컴포넌트가 필요한 순간 마다 메모리에 로드한다.
            },
            {
                path:'/board',
                name:'board',
                component:()=>import('../views/BoardView.vue'),

            }

        ],//여러개의 라우터들이 들어갈 것이기 때문에 배열로 구성
    }

);

export default router;