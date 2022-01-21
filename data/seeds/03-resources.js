exports.seed = function (knex) {
    return knex('actions').insert([
      {
        project_id: 1,
        resource_name: 'foo',
        resource_description: null,
      },
    ])
};