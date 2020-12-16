<template>
  <div class="user-profile">
    <div class="user-profile-sidebar">
      <div class="user-profile-user-panel">
        <h1 class="user-profile-user-username">@{{ user.username }}</h1>
        <div class="user-profile-admin-badge" v-if="user.isAdmin">
          Admin
        </div>
        <div class="user-profile-follower-count">
          <strong>Followers: </strong> {{ followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot"></CreateTwootPanel>
    </div>
    <div class="user-profile-twoots-wrapper">
      <TwootItem
          v-for="twoot in user.twoots"
          :key="twoot.id"
          :username="user.username"
          :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel";

export default {
  name: "UserProfile",
  components: {CreateTwootPanel, TwootItem},
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_FakeUser',
        firstName: 'Fake',
        lastName: 'User',
        email: 'fake.user@host.com',
        isAdmin: true,
        twoots: [
          {id: 1, content: 'Twotter is amazing!'},
          {id: 2, content: 'The really awesome content is great!'}
        ]
      }
    }
  },
  methods: {
    addTwoot(twoot) {
      this.user.twoots.unshift({id: this.user.twoots.length + 1, content: twoot});
    },
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
    display: grid;
    grid-gap: 10px;
  }
}
</style>
