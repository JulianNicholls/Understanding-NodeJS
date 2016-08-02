const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  username:       String,
  task:           String,
  complete:       Boolean,
  hasAttachment:  Boolean
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
