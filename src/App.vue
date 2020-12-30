<template>
  <v-app>
    <template v-if="cred != null">
      <v-navigation-drawer v-model="drawer" app>
        <v-divider></v-divider>
        <v-list>
          <v-list-item
            v-for="[icon, text, to] in links"
            :key="icon"
            link
            :to="{ path: to }"
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block dark color="red" @click="logout">
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main>
        <router-view></router-view>
      </v-main>
    </template>
    <template v-else>
      <v-main>
        <router-view></router-view>
      </v-main>
    </template>
  </v-app>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "App",
  data() {
    return {
      drawer: null,
      links: [["mdi-inbox-arrow-down", "Users", "/"]],
    }
  },

  computed: {
    ...mapState({
      cred: (state) => state.auth.token,
    }),
  },
}
</script>

<style lang="scss">
.v-application--wrap {
  background: #f3f3f3;
}
</style>
