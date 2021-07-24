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

class CustomLogger extends Logger {
  execute(cb) {
    console.log('A custom Logger to Try TabNine');
    this.emit('Start');
    cb();
    console.log('Nice!');
    this.emit('Finish');
  }
}

const myLogger = new Logger();
const mySecongLogger = new CustomLogger();

myLogger.on('Start', () => console.log('Hi!'));
mySecongLogger.on('Start', () => console.log('Hi!'));
mySecongLogger.on('Finish', () => console.log('Chao!'));
myLogger.on('Finish', () => console.log('Chao!'));

myLogger.execute(() => console.log('Hi Execution!'));
mySecongLogger.execute(() => console.log('Hi Tabnine!'));
