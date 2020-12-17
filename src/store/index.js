import {createStore} from 'vuex'
import {UserModule} from "@/store/User";

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        User: UserModule
    }
})
