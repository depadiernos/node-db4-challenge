exports.seed = async (knex) => {
  await knex('recipes').insert([
    {name: 'biscuits'},
    {name: 'dumplins'},
    {name: 'cookie'}
  ])
};
