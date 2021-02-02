<template>
  <div>
    <v-dialog v-if="user.id === null" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <span class="mr-2">Se connecter</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Connexion</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field label="email" required></v-text-field>
            <v-text-field label="mot de passe" required></v-text-field>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-btn v-else @click="logout" text>
      <span class="mr-2">Se déconnecter</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "User",

  computed: mapState({
    user: state => state.user
  }),
  methods: {
    login() {
      this.$store.dispatch("login", 1);
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
