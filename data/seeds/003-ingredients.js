exports.seed = async (knex) => {
  await knex('ingredients').insert([
    {name: 'butter'},
    {name: 'flour'},
    {name: 'broth'},
    {name: 'chocolate chips'},
    {name: 'biscuit mix'},
    {name: 'eggs'}
  ])
};