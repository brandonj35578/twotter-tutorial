<template>
  <div class="user-profile">
    <div class="user-profile-sidebar">
      <div class="user-profile-user-panel">
        <h1 class="user-profile-user-username">@{{ state.user.username }}</h1>
        <div class="user-profile-admin-badge" v-if="state.user.isAdmin">
          Admin
        </div>
        <div class="user-profile-follower-count">
          <strong>Followers: </strong> {{ state.followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"></CreateTwootPanel>
    </div>
    <div class="user-profile-twoots-wrapper">
      <TwootItem
          v-for="twoot in state.user.twoots"
          :key="twoot.id"
          :username="state.user.username"
          :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import {reactive, computed} from "vue";
import {useRoute} from "vue-router";
import {users} from "@/assets/users";
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";

export default {
  name: "UserProfile",
  components: {CreateTwootPanel, TwootItem},
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);

    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[1]
    })

    function addTwoot(twoot) {
      state.user.twoots.unshift({id: state.user.twoots.length + 1, content: twoot});
    }

    return {
      state,
      addTwoot,
      userId
    }
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile-user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;

    h1 {
      margin: 0;
    }

    .user-profile-admin-badge {
      background: cornflowerblue;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .user-profile-twoots-wrapper {
    grid-auto-rows: min-content;
    display: grid;
    grid-gap: 10px;
  }
}
</style>
