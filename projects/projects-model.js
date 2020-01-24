const db = require("../data/db-config")

module.exports = {

addResource,
getResource,
addProject,
getProject,
addTask,
getTask,
intToText,
findById

}

function addResource(resources) {
    return db('resources')
        .insert(resources)
        
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

function addTask(task, id) {
    return db('tasks')
        .insert(task, id)
        .then(([id]) => {
            return db('tasks')
                .where({id})
        })
}

function getTask() {
    return db('tasks')
        .select('tasks.id', 
        'tasks.description', 
        'tasks.notes', 
        'projects.name')
        .join('projects', 
        'projects.id',
        'projects.description',
        'projects.name',
        'projects_id')
        .where({ projects_id: id })
        

}

function intToText() {

    if (1 === true) {

    } else 0 === false
}

function findById(id) {
    return db('projects')
      .where({ id: Number(id) })
      .first();
  }
