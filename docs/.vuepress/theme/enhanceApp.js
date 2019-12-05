import store from './store'
import './styles/index.scss'

export default ({ options, siteData }) => {
    if (siteData.themeConfig.store) {
        Object.keys(siteData.themeConfig.store).forEach(name => {
            store.registerModule(name, siteData.themeConfig.store[name])
        })
    }

    Object.assign(options, { store })
}
