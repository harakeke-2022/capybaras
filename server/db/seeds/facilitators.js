exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('facilitators').del()
    .then(function () {
      // Inserts seed entries
      return knex('facilitators').insert([
        { id: 1, name: 'Ahmad' },
        { id: 2, name: 'Prue' },
        { id: 3, name: 'Eleanor' },
        { id: 4, name: 'Jared' }
      ])
    })
}
