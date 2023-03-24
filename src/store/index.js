import Vue from 'vue'
import Vuex from 'vuex'
import Contents from './post.module'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    Contents
  }
})
