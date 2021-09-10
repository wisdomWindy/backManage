import { createStore } from 'vuex'
import api  from '../utils/api'

export default createStore({
  state: {
    loggedIn:false,
    token:"",
  },
  mutations: {
    setLoginStatus(state, payload){
      state.loggedIn = payload;
    },
    setToken(state, payload){
      state.token = payload;
    }
  },
  actions: {
    login(state, payload){
      console.log(state, payload);
      api.api.login(payload).then(res => {
        state.commit('setLoginStatus', res.status);
        state.commit('setToken', res.token);
      });
    }
  },
  modules: {
  }
});
