// const audioDevices = require('audio-devices');
const audioDevices = require('./index.js');

// audioDevices.setDevice('Speakers')
// .then(() => {
//   console.log('done!')
// })
// .catch((err) => {
//   console.log('error', error)
// })


audioDevices.getDevices()
.then(() => {
  console.log('done!')
})
.catch((err) => {
  console.log('error', error)
})
