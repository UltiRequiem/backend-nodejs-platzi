const os = require('os');

const CPU_INFO = os.cpus();
const IP_ADDRESS = os.networkInterfaces().lo.map((i) => i.address);
const FREE_MEMORY = os.freemem();
const OS = os.type();
const OS_VERSION = os.release();
const USR_INFO = os.userInfo();

// console.log(CPU_INFO, IP_ADDRESS, FREE_MEMORY, OS, OS_VERSION, USR_INFO);
