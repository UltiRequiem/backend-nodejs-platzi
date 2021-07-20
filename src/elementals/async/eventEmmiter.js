const EventEmmiter = require('events');

class Logger extends EventEmmiter {
  execute(cb) {
    console.log('Before');
    this.emit('Start');
    cb();
    this.emit('Finish');
    console.log('After');
  }
}

const myLogger = new Logger();

myLogger.on('Start', () => console.log('Hi!'));
myLogger.on('Finish', () => console.log('Chao!'));

myLogger.execute(() => console.log('Hi Execution!'));
