const Tasks = require('../models/taskModel');

module.exports = function(app) {
  app.get('/api/setupTasks', (req, res) => {
    const firstTasks = [
      {
        username:       'julian',
        task:           'Buy milk',
        complete:       false,
        hasAttachment:  false
      },
      {
        username:       'test',
        task:           'Feed dog',
        complete:       false,
        hasAttachment:  false
      },
      {
        username:       'julian',
        task:           'Learn Node',
        complete:       false,
        hasAttachment:  false
      }
    ];

    Tasks.create(firstTasks, (err, results) => {
      res.send(results);
    });
  });
}
