<template>
  <v-dialog :value="value" persistent max-width="480" @click:outside="close">
    <v-card>
      <v-form
        lazy-validation
        v-model="form"
        ref="addUserForm"
        @submit="addUser"
      >
        <v-card-title class="headline">
          Add New User
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col cols="11">
              <v-text-field
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
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
export default {
  data() {
    return {
      form: true,
      name: "",
      job: "",
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    close() {
      this.$refs.addUserForm.reset()
      this.$emit("closeDialog")
    },

    addUser(e) {
      e.preventDefault()
      if (this.$refs.addUserForm.validate()) {
        this.callAction(async () => {
          const form = {
            name: this.name,
            job: this.job,
          }
          await this.$store.dispatch("user/add", form)
          this.close()
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
