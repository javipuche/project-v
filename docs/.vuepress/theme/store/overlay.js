const state = {
    isOpen: false
}

const mutations = {
    toggleOverlay (state, value = !state.isOpen) {
        state.isOpen = value
    }
}

const actions = {}

const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
