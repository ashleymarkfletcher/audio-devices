# audio-devices

get and set the current audio device on windows.

[![Build status](https://ci.appveyor.com/api/projects/status/2cwals6wgr9fg1gx?svg=true)](https://ci.appveyor.com/project/ashleymarkfletcher/audio-devices)
[![codecov](https://codecov.io/gh/ashleymarkfletcher/audio-devices/branch/master/graph/badge.svg)](https://codecov.io/gh/ashleymarkfletcher/audio-devices)

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
