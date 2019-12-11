import { use } from '@utils/plugins'
import * as components from '@components'
import * as layouts from '@layouts'
import * as pages from '@pages'
import * as store from '@store'

const AthosStore = (appStore) => {
    Object.keys(store).forEach(name => {
        appStore.registerModule(name, store[name])
    })
}

const Athos = {
    install (Vue, options) {
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

// TODO: Mirar como poder exportar los componentes individualmente sin que esten todos en el bundle final
// export * from '@components'
// export * from '@layouts'
// export * from '@pages'
