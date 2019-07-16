const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    showAll: function(req, res) {        
        Task.find({}, function(err, task){
            if(err){
                console.log("Returned error", err);
                // respond with JSON
                res.json({message: "Error showing all", error: err})
            }
            else {
                // respond with JSON
                res.json({message: "Successfully showing all", tasks: task})
            }
        })
    },

    showOne: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task){
            if(err){
                console.log("Error finding task", err);
            } else {
                res.json({message: "Successfully found task", tasks:task})
            }
        })
    },

    create: function(req, res) {
        console.log(req);
        var task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed, created_at: req.body.created_at, updated_at: req.body.updated_at})
        task.save(function(err){
            if(err){
                console.log("Error creating a task!");
            } else {
                res.json({message: "Successfully created task", tasks: task});
            }
        })
    },

    update: function(req, res) {
        Task.findByIdAndUpdate({_id: req.params.id}, req.body, (err, tasksinDB) => {
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", tasks: tasksinDB})
            }
        })
        Task.findByIdAndUpdate({name: req.params.name}, function(err, task){
            if(err){
                console.log("Error finding task");
            } else {
                console.log("User found");
                res.json({message: "Successfully found task", tasks: task});
            }
        })
    },

    delete: function(req, res) {
        Task.find({name: req.params.name}, function(err, task){
            if(err){
                console.log("Error finding task");
            } else {
                console.log("User found");
                res.json({message: "Successfully found task", tasks: task});
            }
        })
    }
};