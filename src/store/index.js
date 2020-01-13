import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
const store = new Vuex.Store({

    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin(state, token) {
            this.$message('changelogin')
            this.config.headers.authorization = token;
            this.state.Authorization = token;
            alert('changeLogin');
            console.log('changelogin:' + token);
            localStorage.setItem('Authorization', token);
        }
    }
});

export default store;