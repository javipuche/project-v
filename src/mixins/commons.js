export default {
    props: {
        themes: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        theme () {
            return this.themes.map(theme => `t-${theme}`)
        }
    }
}
