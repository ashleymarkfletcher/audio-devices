const getDevices = require('../getDevices');
const nircmd = require('nircmd')

test('get the audio devices for the machine', () => {
  expect.assertions(1)
  return expect(getDevices().then(() => {

    // kill the process to stop nircmd from hanging
    nircmd('killprocess NirCmd')
    return ''
  })).resolves.toEqual('')
})
