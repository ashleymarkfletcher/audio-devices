const getDevices = require('../getDevices');

test('get the audio devices for the machine', () => {
  expect.assertions(1)
  return expect(getDevices()).resolves.toEqual('')
})
