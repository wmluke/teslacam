const services = [
  {
    label: 'Dashcam Service',
    type: 'service',
    scriptCheckRunning: 'sudo systemctl status dashcam-monitor',
    scriptStart: 'sudo systemctl start dashcam-monitor',
    scriptStop: 'sudo systemctl stop dashcam-monitor',
    state: false
  },
  {
    label: 'Dropbox Service',
    type: 'service',
    scriptCheckRunning: 'sudo systemctl status dropbox-upload',
    scriptStart: 'sudo systemctl start dropbox-upload',
    scriptStop: 'sudo systemctl stop dropbox-upload',
    state: false
  },
];

module.exports = { services };
