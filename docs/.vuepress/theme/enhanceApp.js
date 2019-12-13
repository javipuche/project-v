import store from '@/theme/store'
import '@/theme/styles/index.scss'
import Athos from '@lib'

export default ({ Vue, options }) => {
    Object.assign(options, { store })

    options.store.commit('themes/setThemes', [
        { name: 'Default', class: '' },
        { name: 'Iberojet', class: 't-iberojet' },
        { name: 'Muchoviaje', class: 't-muchoviaje' }
    ])

    Vue.use(Athos)
}
