var spawn = require("child_process").spawn;
var prebuilt = require("electron-prebuilt");

module.exports = function() {
  var ps = spawn(prebuilt, [__dirname + "/electron.js"], {
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
    destroy: ps.kill,
    set: function(icon) {
      if (initialized) {
        ps.send(icon);
      } else {
        last = icon;
      }
    },
    ok: function() {
      ps.send("green.png");
    },
    error: function() {
      ps.send("red.png");
    },
    progress: function() {
      ps.send("blue.png");
    }
  };
};
