import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signupState: [],
    signinState: [],
    stuff: [],
    carts: []
  },
  mutations: {
    setSignupData (state, payload) {
      state.signupState = payload
    },
    setSigninData (state, payload) {
      state.signinState = payload
    },
    showList (state, payload) {
      state.stuff = payload
    },
    addToCart (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    // signup
    isSignup (store, payload) {
      axios.post('http://localhost:3000/users/signup', {
        username: payload.username,
        password: payload.password
      })
      .then((signupData) => {
        console.log(signupData.data)
        store.commit('setSignupData', signupData.data)
        alert('signup success, you can login now')
      })
    },
    // login
    isLogin (store, payload) {
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then((signinData) => {
        console.log('SIGNINDATA: ', signinData)
        localStorage.setItem('token', signinData.data)
        store.commit('setSigninData', signinData.data)
        alert(`login success, let's shop now !!!`)
        router.push('/')
      })
    },
    loadList (store, payload) {
      axios.get('http://localhost:3000/stuffs/read')
      .then((stuffs) => {
        store.commit('showList', stuffs.data)
      })
    }
  }
})
