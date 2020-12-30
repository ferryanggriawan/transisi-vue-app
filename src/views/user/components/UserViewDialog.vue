<template>
  <v-dialog
    :value="value"
    persistent
    max-width="480"
    @click:outside="$emit('closeDialog')"
  >
    <v-card v-if="user != null">
      <v-card-text class="pt-12">
        <v-row justify="center">
          <v-col cols="4" class="text-center">
            <v-avatar size="100">
              <v-img :src="user.avatar"></v-img>
            </v-avatar>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <span class="title d-block">
              {{ user.first_name }} {{ user.last_name }}
            </span>
            <span class="caption d-block"> {{ user.email }} </span>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary darken-1" text @click="$emit('closeDialog')">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex"
export default {
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
}
</script>

<style lang="scss" scoped></style>
