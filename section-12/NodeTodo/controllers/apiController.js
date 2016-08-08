const bodyParser  = require('body-parser');

const Tasks       = require('../models/taskModel');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Return all tasks for a username
  app.get('/api/tasks/:uname', (req, res) => {
    Tasks.find({ username: req.params.uname }, (err, tasks) => {
      if(err)
        throw err;

      res.send(tasks);
    });
  });

  // Return task data for a task ID
  app.get('/api/task/:id', (req, res) => {
    Tasks.findById(req.params.id, (err, task) => {
      if(err)
        throw err;

      res.send(task);
    });
  });

  // Take JSON data and add or update a task
  app.post('/api/task', (req, res) => {
    if(req.body.id) {   // Update
      Tasks.findByIdAndUpdate(req.body.id, {
        task:           req.body.task,
        complete:       req.body.complete,
        hasAttachment:  req.body.hasAttachment
      }, (err, task) => {
        if(err)
          throw err;

        res.send('Success');
      });
    }
    else {              // New task
      const newTask = Tasks({
        username:       req.body.username,
        task:           req.body.task,
        complete:       false,
        hasAttachment:  req.body.hasAttachment
      });

      newTask.save((err) => {
        if(err)
          throw err;

        res.send('Success');
      });
    }
  });

  // Delete a task with JSON data
  app.delete('/api/task', (req, res) => {
    Tasks.findByIdAndRemove(req.body.id, (err) => {
      if(err)
        throw err;

      res.send('Success');
    });
  });
}
