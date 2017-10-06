# audio-devices

get and set the current audio device on windows.

### Installing

```bash
$ npm install audio-devices --save
```
## Features

  * Set the current audio device
  * Get a list of all audio devices(WIP!)

## Example Usage
Set the current device to "Speakers"

```js
const audioDevices = require('audio-devices');

audioDevices.setDevice('Speakers')
.then(() => {
  console.log('done!')
})
.catch((err) => {
  console.log('error', error)
})

```  

## ToDo
  * Add CLI
  * Find alternative to nircmd for getting audio devices

## Known issues
  * Getting the list of audio devices opens a popup and isn't readable
