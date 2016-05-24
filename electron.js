const {app, Tray} = require('electron');

let appIcon = null;
app.on('ready', () => {
  appIcon = new Tray('blue.png');
  process.send('initialized');
  process.on('message', function (image) {
    appIcon.setImage(image);
  });
});
