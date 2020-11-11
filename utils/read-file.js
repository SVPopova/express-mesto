const fs = require('fs');

module.exports = (pathUrl) => {
  return fs.promises.readFile(pathUrl, { encoding: 'utf8' }).then((file) => {
    return JSON.parse(file);
  });
};
