#!/usr/bin/node
const fs = require('fs');
const { execSync } = require('./common');

// eslint-disable-next-line
const [path, script, command] = process.argv;

const getServices = dirPath => fs
  .readdirSync(dirPath, { withFileTypes: true })
  .filter(f => !f.name.endsWith('.service'))
  .map(({ name }) => name.replace('.service', ''));


switch (command) {
  case 'start':
    getServices('./systemd')
      .forEach((s) => {
        execSync(`sudo sysctrl start ${s}`);
      });
    break;
  case 'stop':
    getServices('./systemd')
      .forEach((s) => {
        execSync(`sudo sysctrl stop ${s}`);
      });
    break;
  case 'status':
    getServices('./systemd')
      .forEach((s) => {
        execSync(`sudo sysctrl status ${s}`);
      });
    break;
  default:
    console.log('Unknown command. [start|stop|status]');
}
