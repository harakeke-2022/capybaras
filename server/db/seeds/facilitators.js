exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('facilitators').del()
    .then(function () {
      // Inserts seed entries
      return knex('facilitators').insert([
        { faci_id: 1, name: 'Ahmad' },
        { faci_id: 2, name: 'Prue' },
        { faci_id: 3, name: 'Eleanor' },
        { faci_id: 4, name: 'Jared' }
      ])
    })
}
