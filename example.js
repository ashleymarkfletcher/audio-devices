const audioDevices = require('audio-devices');

audioDevices.setDevice('Speakers')
.then(() => {
  console.log('done!')
})
.catch((err) => {
  console.log('error', error)
})
