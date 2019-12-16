import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import themes from './themes'
import overlay from './overlay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        themes,
        overlay
    },
    plugins: [createPersistedState({
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 3 }),
            removeItem: key => Cookies.remove(key)
        }
    })]
})
