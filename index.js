const switchDevice = require('./switchDevice')

const audioDevices = [
  "Speakers",
  "Headset Earphone"
]

switchDevice(audioDevices[0])
.then(() => {
	console.log('audio device switched!')
})
.catch((err) => {
  console.log('error switching audio device')
})
