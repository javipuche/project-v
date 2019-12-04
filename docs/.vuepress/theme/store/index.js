import Vue from 'vue'
import Vuex from 'vuex'
import overlay from './overlay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        overlay
    }
})
