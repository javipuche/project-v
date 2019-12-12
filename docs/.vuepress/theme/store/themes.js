export default {
    namespaced: true,
    state: {
        currentTheme: '',
        themes: [
            { name: 'Default', class: '' },
            { name: 'Iberojet', class: 't-iberojet' },
            { name: 'Muchoviaje', class: 't-muchoviaje' }
        ]
    },
    mutations: {
        selectTheme (state, selectedTheme) {
            state.currentTheme = selectedTheme
        }
    },
    actions: {},
    getters: {
        getThemeByName: (state) => (name) => {
            return state.themes.find(theme => theme.name === name)
        }
    }
}
