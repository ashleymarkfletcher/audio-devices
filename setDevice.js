const nircmd = require('nircmd')

module.exports = (audioDevice) => {
  return nircmd('setdefaultsounddevice "'+ audioDevice +'"')
}
