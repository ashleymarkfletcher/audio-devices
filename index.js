const setDevice = require('./setDevice')
const getDevices = require('./getDevices')

getDevices().then((devices) => {
  console.log('devices:', devices)
})

module.exports = {
  setDevice: setDevice,
  getDevices: getDevices
}

// example command
// setDevice('Speakers')
// .then(() => {
// 	console.log('audio device switched!')
// })
// .catch((err) => {
//   console.log('error switching audio device')
// })
