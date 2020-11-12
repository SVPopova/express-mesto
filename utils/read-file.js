const fs = require('fs');

module.exports = (pathUrl) => fs.promises.readFile(pathUrl, { encoding: 'utf8' }).then((file) => JSON.parse(file));
