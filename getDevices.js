const nircmd = require('nircmd')

module.exports = () => {
  // nircmd with showsounddevices never resolves? see below
  nircmd('showsounddevices')

  // HACK: just resolve for now since nircmd won't
  // resolve until the user closes the window
  return Promise.resolve('')
}
