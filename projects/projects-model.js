const db = require("../data/db-config")

module.exports = {

addResource,
getResource,
addProject,
getProject,
addTask,
getTask,
findById,
getById

}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return findById(ids[0])
        })
        
}

function getResource(){
    return db('resources')
}

function addProject(projects) {
    return db('projects')
        .insert(projects)
        .then(ids => ({ id: ids[0] }))
}

function getProject() {
    return db('projects')
}

function addTask(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return getById(ids[0])
        })
        
}

function getTask() {
    return db('tasks')
        .select('tasks.id', 
        'tasks.description', 
        'tasks.notes',
        'tasks.completed',
        'projects.name',
        'projects.description',
        'tasks.project_id')
        .join('projects', 
        'projects.id',
        'tasks.project_id')
        // .where({ projects_id: id })
        

}

function getById(id) {
    return db('tasks')
    .where({ id })
    .first()
   
}

function findById(id) {
    return db('resources')
      .where({ id })
      .first()
  }
