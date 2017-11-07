const nircmd = require('nircmd')

module.exports = () => {
  // nircmd with showsounddevices never resolves?
  nircmd('showsounddevices')

  // HACK: just resolve for now
  return Promise.resolve('')
}
