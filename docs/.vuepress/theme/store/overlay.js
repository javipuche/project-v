export default {
    namespaced: true,
    state: {
        isOpen: false
    },
    mutations: {
        toggleOverlay (state, value = !state.isOpen) {
            state.isOpen = value
        }
    },
    actions: {},
    getters: {}
}
