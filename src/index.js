import { use } from '@utils/plugins'
import * as components from '@components'
import * as layouts from '@layouts'
import * as pages from '@pages'
import * as store from '@store'

let isStoreRegistered = false

const AthosStore = (appStore) => {
    console.log('test')

    Object.keys(store).forEach(name => {
        appStore.registerModule(name, store[name])
    })

    isStoreRegistered = true
}

const Athos = {
    install (Vue, options) {
        // if (!isStoreRegistered) throw new Error('Please initialise plugin with a Vuex store.')

        for (const componentName in components) {
            const component = components[componentName]
            Vue.use(component)
        }

        for (const layoutName in layouts) {
            const layout = layouts[layoutName]
            Vue.use(layout)
        }

        for (const pageName in pages) {
            const page = pages[pageName]
            Vue.use(page)
        }
    }
}

use(Athos)

if (typeof window !== 'undefined' && window.Vue) {
    window.AthosStore = AthosStore
}

export default Athos

export { AthosStore }

export * from '@components'
export * from '@layouts'
export * from '@pages'
