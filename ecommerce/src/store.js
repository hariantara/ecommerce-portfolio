import vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router/index'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    isLogin: '',
    inputQuestion: [],
    readQuestionById: [],
    questAnswer: [],
    qa: []
  },
  mutations: {
    setQuestion (state, payload) {
      state.questions = payload
    },
    createQuestion (state, payload) {
      console.log('-x-x-x-x->', payload)
      state.questions.push(payload)
      state.inputQuestion = payload
    },
    getQUestionIdAja (state, payload) {
      console.log('xxx===>', payload)
      state.readQuestionById = payload
    },
    dataQuestionAnswer (state, payload) {
      state.questAnswer = payload
    },
    dataQA (state, payload) {
      state.qa = payload
    }
  },
  actions: {
    // menampilkan data question
    getAllQuestion (store) {
      axios.get('http://localhost:3000/questions/read', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((data) => {
        console.log('QUESTION', data)
        store.commit('setQuestion', data.data)
      })
    },
    // posting question
    postQuestion (store, payload) {
      console.log('masuk')
      axios.post('http://localhost:3000/questions/create', {
        title: payload.title,
        question: payload.question
      },
        {
          headers: {
            token: localStorage.getItem('token')
          }
        })
      .then((response) => {
        console.log('response==>', response)
        store.commit('createQuestion', response.data)
      })
    },
    // login user
    login (store, payload) {
      console.log('==========check')
      axios.post('http://localhost:3000/users/signin', {
        username: payload.username,
        password: payload.password
      })
      .then((response) => {
        console.log('test')
        // router.go('/home')
        // // console.log('===>', JSON.stringify(response))// untuk liat token
        this.state.isLogin = response.data
        // // console.log('===>', this.isLogin)
        localStorage.setItem('token', response.data)
        // // console.log('response >>> ', response.data)
        // console.log('test')
        // setTimeout(function () {
        router.push('/home')
        // }, 2000)
      })
    },
    // readQUestionById
    getQuestionById (store, payload) {
      console.log('payload===>', payload)
      axios.get(`http://localhost:3000/questions/readbyid/${payload}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((response) => {
        console.log('=x=x=x>', response)
        store.commit('getQUestionIdAja', response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    // quest answer
    questAnswer (store, payload) {
      console.log('=q=q=q=>', payload)
      axios.post(`http://localhost:3000/answers/create/${payload.question}`, {
        answer: payload.answer,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
          headers: {
            token: localStorage.getItem('token')
          }
        })
      .then((answer) => {
        console.log(answer)
        store.commit('dataQuestionAnswer', answer.data)
      })
    },
    answerById (store, payload) {
      console.log('QA ==>', payload)
      axios.get(`http://localhost:3000/answers/read/${payload}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((data) => {
        console.log(data)
        store.commit('dataQA', data.data)
      })
    }
  }
})
