
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.text('project_name', 128)
            .notNullable()
        tbl.text('project_description')
        tbl.boolean('project_completed')
            .defaultTo(false)
            .notNullable()
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.text('resource_name', 128)
            .unique()
            .notNullable()
        tbl.text('resource_description')
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id')
        tbl.text('task_description')
            .notNullable()
        tbl.text('task_notes')
        tbl.boolean('task_completed')
            .defaultTo(false)
            .notNullable()
        tbl.integer('project_id')
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resources_id')
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};