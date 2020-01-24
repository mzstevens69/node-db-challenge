const db = require("../data/db-config")

module.exports = {

addResource,
getResource,
addProject,
getProject,
addTask,
getTask,
findById
//getById

}
//inserting resource into database and returning resource you just created
function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(ids => {
            return findById(ids[0])
        })
        
}
// grab all resources in table
function getResource(){
    return db('resources')
}
// add a projct to the project table showing project that it created
function addProject(projects) {
    return db('projects')
        .insert(projects)
        .then(ids => ({ id: ids[0] }))
}
// all projects in the projects table
function getProject() {
    return db('projects')
}
// add a task to the task table and return the task created
function addTask(task) {
    return db('tasks')
        .insert(task)
        // .then(ids => {
        //     return getById(ids[0])
        
       // })
       .then(ids => ({ id: ids[0] }))
        
}
// all tasks in the task table
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
//use id to add  
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
