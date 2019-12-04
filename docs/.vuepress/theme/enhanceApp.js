import store from './store'
import 'simplebar/dist/simplebar.min.css'
import 'prismjs/themes/prism.css'
import './styles/index.scss'

export default ({ options }) => {
    Object.assign(options, { store })
}
