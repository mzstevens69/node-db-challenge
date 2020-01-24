
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1,
          project_id: 1,
          description: 'paint the rail',
          notes: 'use a dropcloth',
          completed: false
      },
        {id: 2,
          project_id: 2,
          description: 'scrub the chair',
          notes: 'use a dropcloth',
          completed: false
          },
        {id: 3,
          project_id: 3,
          description: 'clean the floor',
          notes: 'use a bucket',
          completed: false
          }
      ]);
    });
};
