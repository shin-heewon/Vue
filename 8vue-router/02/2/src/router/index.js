

const { createRouter } = require("vue-router");
const {createWebHistory} = require("vue-router");


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: ':/pathMath(.*)*',//예외처리 경로
                name: 'Not Found',
                component: NotFound
            },
            {
                path: '/user-:afterUser(*)',
                component: UserGeneric
            },
        ],
    }
)