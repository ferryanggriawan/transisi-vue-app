<template>
  <v-container>
    <v-row class="vh-100" align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-form @submit="login">
          <v-card>
            <v-card-title>
              Welcome, please login to continue
            </v-card-title>
            <v-card-subtitle>
              Lorem ipsum dolor sit.
            </v-card-subtitle>
            <v-card-text class="text-center">
              <v-divider class="mb-2"></v-divider>
              <v-text-field
                v-model="email"
                :rules="[() => !!email || 'This field is required']"
                label="Email"
                placeholder="ex: john@gmail.com"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :rules="[() => !!password || 'This field is required']"
                label="Password"
                placeholder="ex: 09dka0Ms"
                required
              ></v-text-field>
              <v-btn type="submit" class="mt-5" depressed color="primary" block>
                Login
              </v-btn>
              <v-divider class="mt-5 mb-3"></v-divider>
              Don't have account?
              <router-link to="/auth/register">Register</router-link>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: true,
      email: "",
      password: "",
    }
  },

  methods: {
    login(e) {
      e.preventDefault()
      this.$router.replace("/")
    },
  },
}
</script>

<style lang="scss" scoped>
.vh-100 {
  min-height: 100vh;
}
</style>
