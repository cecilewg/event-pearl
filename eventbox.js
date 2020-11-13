// Ex 1
// Create a function empty that create and emit an event hi

const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

function empty () {
  eventEmitter.on('start', () => {
    console.log('Hi')
  })
  eventEmitter.emit('start')
}

// Ex 2
// Create a function withArgs that takes an array, create and emit an event newFellow for all array item's

function withArgs (names) {
  eventEmitter.on('newFellow', names => {
    for (var i = 0; i < names.length; i++) {
      console.log(`Here come's a new pirate ->> ${names[i]}`)
    }
  })
  eventEmitter.emit('newFellow', names)
}

module.exports = {
  empty,
  withArgs,
}
