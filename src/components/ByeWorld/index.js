import ByeWorld from './ByeWorld.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, ByeWorld)
    }
}

use(Plugin)

export default Plugin
