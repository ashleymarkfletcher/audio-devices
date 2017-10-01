const nircmd = require('nircmd')

module.exports = () => {
  return nircmd('showsounddevices')
}
