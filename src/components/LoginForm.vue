<template>
  <v-container fill-height>
    <v-row>
      <v-col offset-sm="2" sm="8" offset-md="4" md="4">
        <v-card outlined>
          <v-card-title>
            <span class="headline">Connexion</span>
          </v-card-title>

          <v-card-text>
            <v-alert v-if="authError" dense type="error"
              >Identifiants inconnus</v-alert
            >
            <v-form @submit.prevent="submit">
              <v-text-field
                label="email"
                prepend-icon="mdi-email"
                :error-messages="emailErrors"
                @input="resetError"
                v-model="email"
                required
              ></v-text-field>
              <v-text-field
                label="mot de passe"
                prepend-icon="mdi-lock"
                :type="'password'"
                v-model="password"
                required
              ></v-text-field>
              <v-card-actions>
                <v-btn text :loading="loading" type="submit">
                  Se connecter
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoginForm",
  data: () => {
    return {
      emailErrors: [],
      email: "",
      password: ""
    };
  },
  computed: mapState({
    loading: state => state.auth.loading,
    authError: state => state.auth.error
  }),
  methods: {
    submit() {
      let regex = /^.+@.+\..+/;
      if (!this.email.match(regex)) {
        this.emailErrors = ["email invalide"];
        return;
      }

      this.$store.dispatch("login", {
        email: this.email,
        password: this.password
      });
    },
    resetError() {
      this.emailErrors = [];
    }
  }
};
</script>
