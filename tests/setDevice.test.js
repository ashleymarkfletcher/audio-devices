const setDevice = require('../setDevice');

test('set the audio device to Speakers', () => {
  expect.assertions(1)
  return expect(setDevice('Speakers')).resolves.toEqual('')
})
