
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1,
          project_id: 1,
          name: 'Paint Brush',
          description: 'synthetic hair paint brush'     
      },
        {id: 2,
          project_id: 2,
          name: 'Broom',
          description: 'Like the kind witches ride'
          },
        {id: 3,
          project_id: 3,
          name: 'Scrubber',
          description: 'a handled scrubber'
          }
      ]);
    });
};
