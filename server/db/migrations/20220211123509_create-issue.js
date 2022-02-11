exports.up = function (knex) {
  return knex.schema.createTable('issues', table => {
    table.integer('faci_id').references('facilitators.id')
    table.integer('students_id').references('students.id')
    table.string('issues')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('issues')
}
