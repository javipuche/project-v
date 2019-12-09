import * as components from '@components'
import * as layouts from '@layouts'
import * as pages from '@pages'
import * as store from './store'

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

        if (!options || !options.store) {
            throw new Error('Please initialise plugin with a Vuex store.')
        }

        Object.keys(store).forEach(name => {
            options.store.registerModule(name, store[name])
        })
    }
}

export * from '@components'
export * from '@layouts'
export * from '@pages'
export default Athos

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Athos)
}
