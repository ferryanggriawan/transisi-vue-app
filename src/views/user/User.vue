<template>
  <v-app>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col cols="4" v-for="(user, idx) in users" :key="idx">
          <user-card :user="user" @edit="edit" @delete="deleteUser"></user-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {}
  },

  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
  },

  mounted() {
    this.browseUser()
  },

  methods: {
    browseUser() {
      this.callAction(async () => {
        this.$store.dispatch("user/browse", { per_page: 15 })
      })
    },

    edit(id) {
      console.log(id)
    },

    deleteUser(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
