var statusIcon = require("./index.js")();

let i = 0;
setInterval(function() {
  i++;
  switch ((i + 1) % 4) {
    case 0:
      statusIcon.ok();
      break;
    case 1:
    case 3:
      statusIcon.progress();
      break;
    case 2:
      statusIcon.error();
      break;
  }
}, 1000);
