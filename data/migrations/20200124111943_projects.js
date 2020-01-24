
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
  
          tbl.increments();
  
          tbl.string('name', 128)
              .notNullable()
              .unique()
              .index()
          
          tbl.string('description', 1000)
  
          tbl.boolean('Completed').defaultTo(false);
              
      })
  
      .createTable('resources', tbl => {
  
          tbl.increments()
  
          tbl.string('name')
              .notNullable()
              .index()
  
          tbl.string('description', 500)
  
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE')
  
      })
  
      .createTable('tasks', tbl => {
  
          tbl.increments()

          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    
          tbl.string('description', 128)
              .notNullable()
          
          tbl.string('notes', 128)
  
          tbl.boolean('Completed').defaultTo(false);
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
          .dropTableIfExists("tasks")
          .dropTableIfExists("resources")
          .dropTableIfExists("projects");
  };
