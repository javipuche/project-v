import HelloWorld from './HelloWorld.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, HelloWorld)
    }
}

use(Plugin)

export default Plugin
