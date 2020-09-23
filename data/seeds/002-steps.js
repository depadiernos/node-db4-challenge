exports.seed = async (knex) => {
  await knex("steps").insert([
    { recipe_id: 1, step_number: 1, instruction: "put all ingredients together" },
    { recipe_id: 1, step_number: 2, instruction: "mix it" },
    { recipe_id: 1, step_number: 3, instruction: "bake" },
    { recipe_id: 2, step_number: 1, instruction: "simmer chicken broth" },
    { recipe_id: 2, step_number: 2, instruction: "make dumplins" },
    { recipe_id: 2, step_number: 3, instruction: "put dumplins in broth" },
    { recipe_id: 3, step_number: 1, instruction: "put all ingredients together" },
    { recipe_id: 3, step_number: 2, instruction: "mix and put on cookie pan" },
    { recipe_id: 3, step_number: 3, instruction: "bake for 20 minutes" }
  ])
}
