<template>
  <v-dialog
    :value="value"
    persistent
    max-width="400px"
    @click:outside="$emit('closeDialog')"
  >
    <v-card>
      <v-card-title class="headline">
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary darken-1" text @click="$emit('closeDialog')">
          Cancel
        </v-btn>
        <v-btn color="red darken-1" text @click="$emit('confirm')">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Are You Sure?",
    },
    text: {
      type: String,
      default: "If you delete this user you can restore it, continue proccess?",
    },
  },
}
</script>

<style lang="scss" scoped></style>
