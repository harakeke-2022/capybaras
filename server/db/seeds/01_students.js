exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { student_id: 1, student_name: 'Nikhita' },
        { student_id: 2, student_name: 'Ningyi' },
        { student_id: 3, student_name: 'Campbell' },
        { student_id: 4, student_name: 'Hiro' },
        { student_id: 5, student_name: 'Ben D' },
        { student_id: 6, student_name: 'Ben A' },
        { student_id: 7, student_name: 'Kate H' },
        { student_id: 8, student_name: 'Kate T' },
        { student_id: 9, student_name: 'Sam D' },
        { student_id: 10, student_name: 'Sam W' },
        { student_id: 11, student_name: 'Jinny' },
        { student_id: 12, student_name: 'Claire' },
        { student_id: 13, student_name: 'Ryan' },
        { student_id: 14, student_name: 'Bella' },
        { student_id: 15, student_name: 'Jake' },
        { student_id: 16, student_name: 'Tarek' },
        { student_id: 17, student_name: 'Sadie' },
        { student_id: 18, student_name: 'Joanne' },
        { student_id: 19, student_name: 'Angela' },
        { student_id: 20, student_name: 'Gus' }
      ])
    })
}
