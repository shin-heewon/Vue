import { createRouter, createWebHistory } from "vue-router";
import UserView from "@/views/UserView.vue"

//라우터 구성 객체
const router = createRouter(
    {
            history:createWebHistory(import .meta.env.BASE_URL),
            routes: [
                {
                path: '/user/:id', //:id에 동적으로 각각의 아이디가 들어감, 사용자 정보를 꽂아서 사용할 수 있다.
                //참고로'/:user/:id' 이렇게 세그먼트 2개로 이루어진 경로도 가능함. 이렇게 하면 user에 대한 값을 먼저 동적으로 찾고 id값을 동적으로 넣어준다.
                name: 'user',
                component: UserView,
                },
                
            ],
        }
    )
export default router;