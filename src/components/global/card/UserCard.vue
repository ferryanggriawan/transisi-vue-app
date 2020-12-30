<template>
  <v-card>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar size="80" color="grey darken-1">
          <img :src="user.avatar" alt="John" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="pb-1 text-h6">
            {{ user.first_name }} {{ user.last_name }}
          </v-list-item-title>

          <v-list-item-subtitle>
            {{ user.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="$emit('edit', user.id)">
            <v-icon color="info lighten-1">mdi-pen</v-icon>
          </v-btn>
          <v-btn icon @click="$emit('delete', user.id)">
            <v-icon color="red lighten-1">
              mdi-trash-can-outline
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: new Object({
        id: 0,
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
      }),
    },
  },
}
</script>

<style lang="scss" scoped></style>
