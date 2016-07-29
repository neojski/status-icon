# status-icon
Easy way of adding tray icon telling you what's the build status

## Usage
```bash
npm install --save-dev status-icon
```

```js
var statusIcon = require('status-icon')();
statusIcon.set('my-icon.png');
```

## How to use
Use it with browserify or any of your other build systems:
```js
...
function bundle() {
  statusIcon.set('my-icon/blue.png');
  var stream = bundler.bundle();
  stream.on('error', function () {
    statusIcon.set('my-icon/red.png');
  });
  stream.(...).on('finish', function () {
    statusIcon.set('my-icon/green.png');
  });
}
```
