import axios from 'axios'  //引入axios
//下面这两个不一定需要引入，看你项目需要拦截的时候做什么操作，但是一般都需要引入store
import store from '@/store/index'  //引入store
import router from '@/router'  //引入router


let img = axios.create({
    baseURL:'http://192.168.43.124:9092'
})

export default img