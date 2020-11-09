const fs = require('fs');

module.exports = (pathUrl) => {
return fs.promises.readFile(pathUrl, { encoding: 'utf8' })
.then(file => {
  console.log(file)
  return JSON.parse(file)
})
}