exports.up = async (knex) => {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name").notNullable()
  })
  await knex.schema.createTable("steps", (table) => {
    table.increments("id")
    table.string("instruction").notNullable()
    table.integer("step_number").notNullable()
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.string("name").notNullable()
  })
  await knex.schema.createTable("recipes_ingredients", (table) => {
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("recipes_ingredients")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("recipes")
}
