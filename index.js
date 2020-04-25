const spawn = require("child_process").spawn;
const electron = require("electron");

module.exports = function() {
  const ps = spawn(electron, [__dirname + "/electron.js"], {
    stdio: [null, null, null, "ipc"]
  });

  let initialized = false;
  let last = null;

  ps.on("message", function(msg) {
    if (msg === "initialized") {
      initialized = true;
      if (last) {
        ps.send(last);
      }
    }
  });

  return {
    destroy: function() {
       ps.kill();
    },
    set: function(icon) {
      if (initialized) {
        ps.send(icon);
      } else {
        last = icon;
      }
    },
    ok: function() {
      ps.send(__dirname + "/green.png");
    },
    error: function() {
      ps.send(__dirname + "/red.png");
    },
    progress: function() {
      ps.send(__dirname + "/blue.png");
    }
  };
};
