const configValues = require('./config')

module.exports = {
  getDBConnectionString: function () {
    if(configValues.username !== '') {
      return `mongodb://${configValues.username}:${configValues.password}@${configValues.site}/${configValues.db}`;
    }

    return `mongodb://${configValues.site}/${configValues.db}`;
  }
}
