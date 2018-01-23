// const nircmd = require('nircmd')
// var spawn = require('child_process').spawn;
const spawn = require('cross-spawn');

module.exports = () => {
  // nircmd with showsounddevices never resolves? see below
  // nircmd('showsounddevices')
  const args = [
    '-list_devices',
     'true',
     '-f',
    'dshow',
    '-i',
    'dummy'
  ]
  const cmd = spawn.sync('ffmpeg', args,  { stdio: 'inherit' })
  // .on('error', function( err ){ console.log('error!!', err); })

console.log('syn', cmd);

  // cmd.stdout.on('data', function(data) {
  //     console.log('data', data);
  // });
  //
  // cmd.stderr.on('data', function(data) {
  //     console.log('error! ', data);
  // });
  //
  // cmd.on('close', function() {
  //     console.log('finished');
  // });

  // HACK: just resolve for now since nircmd won't
  // resolve until the user closes the window
  return Promise.resolve('')
}
