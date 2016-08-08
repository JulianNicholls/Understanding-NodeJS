const configValues = require('./config')

// This is sensitive to whether there are user credentials. If they are present
// (username not blank), then they are passed in the connection String

module.exports = {
  getDBConnectionString: function () {
    let cv        = configValues;  // Just to shorten the calls below
    let username  = '';

    if(cv.username !== '') {
      username = `${cv.username}:${cv.password}@`;
    }

    return `mongodb://${username}${cv.site}/${cv.db}`;
  }
}
