import Layout from './Layout.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Layout)
    }
}

use(Plugin)

export default Plugin
