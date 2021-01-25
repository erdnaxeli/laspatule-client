<template>
  <v-app>
    <v-app-bar app color="orange darken-2" dark>
      <div class="d-flex align-center">
        <v-app-bar-title>La Spatule</v-app-bar-title>
      </div>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
