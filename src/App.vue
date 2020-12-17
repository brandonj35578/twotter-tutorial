<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigation-logo">
          Twotter
        </div>
      </router-link>
      <div class="navigation-user">
        {{ user.username }}
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        username: '_FakeUser'
      }
    }
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
