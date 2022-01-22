// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    insert,
    update,
    remove,
}

function get(id) {
    let query = db("tasks");
  
    if (id) {
      return query.where('task_id', id).first()
    } else {
      return query.leftJoin('projects', 'projects.project_id', 'tasks.project_id')
    }
  }

function insert(task){
    return db('tasks')
        .insert(task)
        .then(([id]) => get(id))
}

function update(id, changes){
    return db('tasks')
        .where('id', id)
        .update(changes)
        .then((count) => (count > 0 ? get(id) : null))
}

function remove(id){
    return db('tasks').where('id', id).del();
}