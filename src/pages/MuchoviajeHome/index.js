import MuchoviajeHome from './MuchoviajeHome.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, MuchoviajeHome)
    }
}

use(Plugin)

export default Plugin
