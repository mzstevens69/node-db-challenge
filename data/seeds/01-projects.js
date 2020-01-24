
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, 
          name: 'Paint',
          description: 'paint everything',
          completed: false
        },
        {id: 2,
          name: 'Clean',
          description: 'Clean everything',
          completed: false
          },
        {id: 3,
          name: 'Scrub',
          description: 'Scrub everything',
          completed: false
          }
      ]);
    });
};
