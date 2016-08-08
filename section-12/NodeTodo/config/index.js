const configValues = require('./config')

// This is sensitive to whether there are user credentials. If they are present
// (username not blank), then they are passed in the connection String

module.exports = {
  getDBConnectionString: function () {
    let cv    = configValues;  // Just to shorten the calls below
    let creds = '';

    if(cv.username !== '') {
      creds = `${cv.username}:${cv.password}@`;
    }

    return `mongodb://${creds}${cv.site}/${cv.db}`;
  }
}
