const fs = require('fs');
const path = require('path')
const { Transform } = require('stream');

function duplicate (filename) {
  const { name, ext } = path.parse(filename)
  const readStream = fs.createReadStream(filename)
  const writeStream = fs.createWriteStream(`${name}.copy${ext}`)

  // ou écriture classique (sans la déstructuration)
  // const parsedFilename = path.parse(filename) //filename.js => { name : 'filename', ext : '.js' }
  // const name = parsedFilename.name
  // const ext = parsedFilename.ext


  readStream.pipe(writeStream)

  // readStream.on('data', (data) => {
  //   writeStream.write(data.toString())
  // })
  // => il se passe ça en background du pipe
}

module.exports = {
  duplicate
}

function duplicate(filename, re, fn) {
  const readStream = fs.createReadStream(filename)

  const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(filename.toString().toUpperCase());
    callback();
  }
});

readStream.pipe(upperCaseTr).pipe(process.stdout);

  // const readStream = fs.createReadStream(filename)
  //
  // readStream.pipe(process.stdout)
}
