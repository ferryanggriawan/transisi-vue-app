<template>
  <v-container>
    <v-row class="vh-100" align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="5">
        <v-form ref="loginForm" @submit="login" lazy-validation v-model="form">
          <v-card class="pa-5">
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
                type="password"
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
      if (this.$refs.loginForm.validate()) {
        this.callAction(async () => {
          const form = this.createBodyReq()

          await this.$store.dispatch("auth/login", form)
          this.$router.replace("/")
        })
      }
    },

    createBodyReq() {
      return {
        email: this.email,
        password: this.password,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.vh-100 {
  min-height: 100vh;
}
</style>
