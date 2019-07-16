const tasks = require('./../controllers/tasks');

module.exports = (app) => {
    // app.get('/task', tasks.addTask)
    app.get('/tasks', tasks.showAll)
    app.get('/tasks/:id', tasks.showOne)
    app.post('/task', tasks.create)
    app.put('/tasks/:id', tasks.update)
    app.delete('/tasks/:id', tasks.delete)    
};