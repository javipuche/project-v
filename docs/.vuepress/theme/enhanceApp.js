import store from '@/theme/store'
import '@/theme/styles/index.scss'
import Athos, { AthosStore } from '@lib'

export default ({ Vue, siteData, options }) => {
    Object.assign(options, { store })
    AthosStore(options.store)

    Vue.use(Athos)
}
