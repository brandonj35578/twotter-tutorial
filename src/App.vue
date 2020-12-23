<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation-logo">
          {{ appName }}
        </div>
      </router-link>
      <label for="langSelect"><strong>{{ $store.getters.getLabel('language') }}: </strong></label>
      <select id="langSelect" v-model="state.config.lang" @change="changeLang">
        <option :value="option.value" v-for="(option, index) in state.globals.availableLangs" :key="index">
          {{ option.name }}
        </option>
      </select>
      <div class="navigation-user" v-if="user">
        {{ user.username }}
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import {useStore, mapGetters} from "vuex";
import {computed} from "vue";

export default {
  name: 'App',
  computed: {
    ...mapGetters({appName: 'getAppName'})
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user)
    const state = store.state

    async function changeLang(e) {
      await store.dispatch('setLang', e.target.value);
      await store.dispatch('setLabels');
    }

    return {
      changeLang,
      state,
      user
    };
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: cornflowerblue;
    color: white;

    .navigation-logo {
      font-weight: bold;
      font-size: 24px;
    }

    .navigation-user {
      font-weight: bold;
    }
  }
}
</style>
