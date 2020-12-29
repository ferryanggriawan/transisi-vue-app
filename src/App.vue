<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="scss">
.v-application--wrap {
  background: #f3f3f3;
}
</style>
