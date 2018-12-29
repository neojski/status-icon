var statusIcon = require('./index.js')();

let icons = [
  'green.png',
  'blue.png',
  'red.png',
];
let i = 0;
setInterval(function () {
  i = (i + 1) % 3;
  statusIcon.set(icons[i]);
}, 1000);
