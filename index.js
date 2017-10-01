const setDevice = require('./setDevice')
const getDevices = require('./getDevices')

module.exports = {
  setDevice: setDevice,
  getDevices: getDevices
}

// example set command
// setDevice('Speakers')
// .then(() => {
// 	console.log('audio device switched!')
// })
// .catch((err) => {
//   console.log('error switching audio device')
// })

// example get command
// getDevices().then((devices) => {
//   console.log('devices:', devices)
// })
