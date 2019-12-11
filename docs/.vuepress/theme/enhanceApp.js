import store from './store'
import './styles/index.scss'
import Athos, { AthosStore } from '../../../src'

export default ({ Vue, options }) => {
    Object.assign(options, { store })
    AthosStore(options.store)
    Vue.use(Athos)
}
