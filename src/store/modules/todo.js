import { TODOLIST_ADD_TASK, TODOLIST_REMOVE_TASK } from '../mutation-types'

const state = {
  tasks: []
}

const getters = {
  tasks: state => state.tasks
}

function addTask (task) {
  return { type: TODOLIST_ADD_TASK, task }
}

function removeTask (task) {
  return { type: TODOLIST_REMOVE_TASK, task }
}

const actions = {
  addTask ({ commit }, task) {
    commit(addTask(task))
  },
  removeTask ({ commit }, task) {
    commit(removeTask(task))
  }
}

const mutations = {
  [TODOLIST_ADD_TASK] (state, payload) {
    state.tasks.push(payload.task)
  },
  [TODOLIST_REMOVE_TASK] (state, payload) {
    const index = state.tasks.indexOf(payload.task)
    state.tasks.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
