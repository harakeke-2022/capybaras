exports.up = function (knex) {
  return knex.schema.createTable('students', table => {
    table.increments('id')
    table.string('student_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('student_name')
}
