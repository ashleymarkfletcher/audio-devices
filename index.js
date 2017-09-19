const nircmd = require('nircmd')
const audioDevices = [
  "Speakers",
  "Headset Earphone"
]

nircmd('setdefaultsounddevice "Headset Earphone"')
.then(() => {
	console.log('audio device switched!')
})
.catch((err) => {
  console.log('error switching audio device')
})
