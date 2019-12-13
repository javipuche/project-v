export default {
    namespaced: true,
    state: {
        currentTheme: '',
        themes: []
    },
    mutations: {
        selectTheme (state, selectedTheme) {
            state.currentTheme = selectedTheme
        },
        setThemes (state, value) {
            state.themes = value
        }
    },
    actions: {},
    getters: {
        getThemeByName: (state) => (name) => {
            return state.themes.find(theme => theme.name === name)
        }
    }
}
