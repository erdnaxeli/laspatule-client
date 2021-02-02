<template>
  <v-container>
    <v-row>
      <v-col offset-sm="2" sm="8" offset-md="4" md="4">
        <v-list two-line>
          <v-list-item
            v-for="recipe in recipes"
            :key="recipe.id"
            :to="`/recette-${getSlug(recipe.title)}-${recipe.id}`"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="recipe.title" />
                <v-list-item-subtitle v-text="recipe.user.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import slugify from "slugify";

export default {
  name: "Recipes",
  created() {
    this.$store.dispatch("getRecipes");
  },
  computed: mapState({
    recipes: state => state.recipes
  }),
  methods: {
    getSlug: title => slugify(title)
  }
};
</script>
