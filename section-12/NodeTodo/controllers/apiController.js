const bodyParser  = require('body-parser');

const Tasks       = require('../models/taskModel');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/tasks/:uname', (req, res) => {
    Tasks.find({ username: req.params.uname }, (err, tasks) => {
      if(err)
        throw err;

      res.send(tasks);
    });
  });

  app.get('/api/task/:id', (req, res) => {
    Tasks.findById(req.params.id, (err, task) => {
      if(err)
        throw err;

      res.send(task);
    });
  });

  app.post('/api/task', (req, res) => {
    if(req.body.id) {   // Update
      Tasks.findByIdAndUpdate(req.body.id, {
        task:           req.body.tasktext,
        complete:       req.body.complete,
        hasAttachment:  req.body.hasAttachment
      }, (err, task) => {
        if(err)
          throw err;

        res.send('Success');
      });
    }
    else {    // New task
      const newTask = Tasks({
        username:       req.body.username,
        task:           req.body.tasktext,
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

  app.delete('/api/task', (req, res) => {
    Tasks.findByIdAndRemove(req.body.id, (err) => {
      if(err)
        throw err;

      res.send('Success');
    });
  });
}
