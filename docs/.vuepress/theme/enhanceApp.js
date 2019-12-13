import store from '@/theme/store'
import '@/theme/styles/index.scss'
import Athos, { AthosStore } from '@lib'

export default ({ Vue, options }) => {
    Object.assign(options, { store })

    options.store.commit('themes/setThemes', [
        { name: 'Default', class: '' },
        { name: 'Iberojet', class: 't-iberojet' },
        { name: 'Muchoviaje', class: 't-muchoviaje' }
    ])

    AthosStore(options.store)
    Vue.use(Athos)
}
