<template>
  <v-dialog :value="value" persistent max-width="480" @click:outside="close">
    <v-card>
      <v-form
        lazy-validation
        v-model="form"
        ref="editUserForm"
        @submit="editUser"
      >
        <v-card-title class="headline">
          Edit User
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="11" v-if="user != null">
              <v-text-field
                v-model="user.name"
                :rules="[() => !!user.name || 'This field is required']"
                label="Name"
                placeholder="ex: John Doe"
                required
              ></v-text-field>

              <v-text-field
                v-model="job"
                :rules="[() => !!job || 'This field is required']"
                label="Job"
                placeholder="ex: Manager"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-row no-gutters justify="center">
            <v-col cols="11" class="text-right">
              <v-btn color="secondary darken-1" text @click="close">
                close
              </v-btn>
              <v-btn color="primary darken-1" text type="submit">
                Save
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      form: true,
      job: "",
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState({
      user: (state) => state.user.user,
    }),
  },

  methods: {
    close() {
      this.$refs.editUserForm.reset()
      this.$emit("closeDialog")
    },

    editUser(e) {
      e.preventDefault()
      if (this.$refs.editUserForm.validate()) {
        this.callAction(async () => {
          const payload = {
            id: this.user.id,
            form: {
              name: this.user.name,
              job: this.job,
            },
          }
          await this.$store.dispatch("user/edit", payload)
          this.$store.commit("user/reset")
          this.close()
          this.$store.dispatch("user/browse", { per_page: 15 })
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
