<template>
  <v-app>
    <v-app-bar app color="orange darken-2" dark>
      <div class="d-flex align-center">
        <v-app-bar-title>
          <router-link to="/" style="text-decoration: none; color: inherit;">
            La Spatule
          </router-link>
        </v-app-bar-title>
      </div>

      <v-spacer />
      <v-btn v-if="logged">Créer une recette</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    logged() {
      return this.$store.state.user.accessToken !== null;
    }
  }
};
</script>
