import {createStore} from 'vuex'
import {UserModule} from "@/store/User";
import {Lang} from "@/assets/lang";

export default createStore({
    state: {
        config: {
            lang: null
        },
        globals: {
            appName: 'Twotter',
            availableLangs: [
                {value: 'de', name: 'Deutsch'},
                {value: 'en', name: 'Englisch'},
                {value: 'fr', name: 'Französisch'}
            ]
        },
        labels: {},
        Lang
    },
    mutations: {
        SET_LABELS(state, labels) {
            state.labels = labels;
        },
        SET_LANG(state, lang) {
            state.config.lang = lang;
        }
    },
    actions: {
        setLang({commit}, lang) {
            commit('SET_LANG', lang);
        },
        setLabels({commit}) {
            const langKey = this.state.config.lang;
            const labels = this.state.Lang[langKey] !== undefined ? this.state.Lang[langKey] : {};
            commit('SET_LABELS', labels);
        }
    },
    modules: {
        User: UserModule
    },
    getters: {
        getAppName: state => state.globals.appName,
        getLabel: (state) => (labelKey) => state.labels[labelKey] || '!!!Undefined Label!!!'
    }
})
