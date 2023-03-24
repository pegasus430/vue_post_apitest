import contentsApi from '../services/post.service'
import { findIndex } from 'lodash'
import Vue from 'vue'

export const SET_MANY_CONTENTS = 'SET_MANY_CONTENTS'
export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const SET_ONE_CONTENT = 'SET_ONE_CONTENT'
export const DELETE_CONTENT = 'DELETE_CONTENT'

const state = {
  contents: [],
  content: {}
}

const getters = {
  getterAllContents: (state) => state.contents,
  getterSingleContent: (state) => state.content
}

const mutations = {
  [SET_MANY_CONTENTS] (state, contents) {
    state.contents = contents
  },
  [SET_ONE_CONTENT] (state, content) {
    state.content = content
  },
  [UPDATE_CONTENT] (state, content) {
    const index = findIndex(state.contents, { contentId: content.contentId })
    Vue.set(state.contents, index, content)
  }
}

const actions = {
  actionGetAllContents ({ commit }) {
    return contentsApi.getAllContent()
      .then((response) => {
        commit(SET_MANY_CONTENTS, response.data)

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  },
  actionGetSingleContent ({ commit }, contentId) {
    return contentsApi.getSingleContent(contentId)
      .then((response) => {
        commit(SET_ONE_CONTENT, response.data)

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  },
  actionEditContent ({ commit },  contentId, content ) {
    return contentsApi.patchContent(contentId, content)
      .then((response) => {
        commit(UPDATE_CONTENT, { ...content, contentId })

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  },
  actionAddContent ({ commit }, content) {
    return contentsApi.postContent(content)
      .then((response) => {
        commit(SET_ONE_CONTENT, response.data)

        return Promise.resolve(response)
      })
      .catch((err) => Promise.reject(err))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
