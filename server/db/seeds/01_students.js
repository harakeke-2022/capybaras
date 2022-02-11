exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Nikhita' },
        { id: 2, name: 'Ningyi' },
        { id: 3, name: 'Campbell' },
        { id: 4, name: 'Hiro' },
        { id: 5, name: 'Ben D' },
        { id: 6, name: 'Ben A' },
        { id: 7, name: 'Kate H' },
        { id: 8, name: 'Kate T' },
        { id: 9, name: 'Sam D' },
        { id: 10, name: 'Sam W' },
        { id: 11, name: 'Jinny' },
        { id: 12, name: 'Claire' },
        { id: 13, name: 'Ryan' },
        { id: 14, name: 'Bella' },
        { id: 15, name: 'Jake' },
        { id: 16, name: 'Tarek' },
        { id: 17, name: 'Sadie' },
        { id: 18, name: 'Joanne' },
        { id: 19, name: 'Angela' },
        { id: 20, name: 'Gus' }
      ])
    })
}
