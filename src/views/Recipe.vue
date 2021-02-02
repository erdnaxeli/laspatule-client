<template>
  <v-container>
    <v-row>
      <v-col offset-sm="2" sm="8" offset-md="4" md="4">
        <v-card :loading="loading">
          <v-card-title>{{ recipe.title }}</v-card-title>
          <v-card-subtitle>Par {{ recipe.user.name }}</v-card-subtitle>
          <v-card-text>
            Ingrédients :
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                {{ ingredient.ingredient.name }} : {{ ingredient.quantity }}
              </li>
            </ul>
          </v-card-text>
          <v-divider class="mx-4" />
          <v-card-text>
            <div v-for="section in recipe.sections" :key="section.id">
              {{ section.title }}
              <ol>
                <li v-for="step in section.steps" :key="step.id">
                  {{ step.instruction }}
                </li>
              </ol>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("getRecipeDetail", this.recipeId);
  },
  computed: mapState({
    loading: state => state.recipeDetailLoading,
    recipe: state => state.recipeDetail
  }),
  props: ["recipeId"]
};
</script>
