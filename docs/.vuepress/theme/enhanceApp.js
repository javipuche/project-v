import store from './store'
import './styles/index.scss'
import Athos from '../../../src'

export default ({ Vue, options }) => {
    Vue.use(Athos, { store })
    Object.assign(options, { store })
}
