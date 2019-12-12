import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import themes from './themes'
import overlay from './overlay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        themes,
        overlay
    },
    plugins: [createPersistedState()]
})
