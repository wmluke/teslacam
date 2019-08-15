const services = [
  {
    label: 'Dashcam Service',
    type: 'service',
    scriptCheckRunning: 'sudo sysctl status dashcam-monitor',
    scriptStart: 'sudo sysctl start dashcam-monitor',
    scriptStop: 'sudo sysctl stop dashcam-monitor',
    state: false
  },
  {
    label: 'Dropbox Service',
    type: 'service',
    scriptCheckRunning: 'sudo sysctl status dropbox-upload',
    scriptStart: 'sudo sysctl start dropbox-upload',
    scriptStop: 'sudo sysctl stop dropbox-upload',
    state: false
  },
];

module.exports = { services };
