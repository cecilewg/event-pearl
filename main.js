const eventbox = require('./eventbox.js');

eventbox.empty();
eventbox.withArgs(
  ['Luffy',
  'Zoro',
  'Usopp',
  'Robin',
  'Nami',
  'Sanji',
  'Ch0pper']
);

// ou const { empty, withArgs } = require('./eventbox.js')
// empty();
// withArgs(
//   ['Luffy',
//   'Zoro',
//   'Usopp',
//   'Robin',
//   'Nami',
//   'Sanji',
//   'Ch0pper']
// );

const { duplicate } = require('./streambox.js')
if (process.argv.length <= 2) {
  console.log('usage: node.js <FILENAME>')
} else {
  const filename = process.argv[2]

duplicate(filename)

console.log(`File: ${filename} successfully duplicated!`)
}
