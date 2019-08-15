#!/usr/bin/env node

const { execSync } = require('./common');

// eslint-disable-next-line
const [path, script, command] = process.argv;

const services = ['dashcam-monitor', 'rotate-video', /* 'dropbox-upload' */];

switch (command) {
  case 'start':
    services.forEach((s) => {
      execSync(`sudo systemctl start ${s}`);
    });
    break;
  case 'stop':
    services.forEach((s) => {
      execSync(`sudo systemctl stop ${s}`);
    });
    break;
  case 'status':
    services.forEach((s) => {
      execSync(`sudo systemctl status ${s}`);
    });
    break;
  default:
    console.log('Unknown command. [start|stop|status]');
}
