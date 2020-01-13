import axios from 'axios'  //引入axios
//下面这两个不一定需要引入，看你项目需要拦截的时候做什么操作，但是一般都需要引入store
import store from '@/store/index'  //引入store
import router from '@/router'  //引入router

let api = axios.create({
    baseURL:'http://172.20.10.6:9091'

})

// http request 拦截器
api.interceptors.request.use(
    config => {
        // if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        let auth = localStorage.getItem("auth");
        if(auth){
            // config.headers.authorization = store.state.token //请求头加上token
            config.headers.authorization=auth
            // alert(store.state.token)
        }
        return config
    },
    err => {
        return Promise.reject(err)
    })

// http response 拦截器
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    localStorage.removeItem('auth')
                    // 返回 401 清除token信息并跳转到登录页面

                    router.replace({
                        path: '/login',

                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });


// const baseURL='http://172.20.10.6:9091'
// api.defaults.baseURL=baseURL
export default api

