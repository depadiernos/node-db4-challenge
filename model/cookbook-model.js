const db = require("../data/db-config")

// -`getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

const getRecipes = async () => {
  await db("recipes").select()
}

const getShoppingList = async (recipe_id) => {
  await db("ingredients as i")
    .join("recipe_ingredients as r_i", "r_i.ingredient_id", "i.id")
    .where("r_i.recipe_id", recipe_id)
}

const getInstructions = async (recipe_id) => {
  await db("steps").where(recipe_id).orderBy("step_number", "asc")
}
