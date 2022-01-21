// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    insert,
    update,
    remove,
}

function get(id){
    if(!id) throw new Error('Id must be defined')
    
    let allTasks = db('tasks')

    return allTasks
        .where('id', id)
        .first()
        .then((task) => {
            return task
        })
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