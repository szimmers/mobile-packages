Package.describe({
  name: "zimv20:camera",
  summary: "Forked mdg:camera. Has dynamically sized popup on browsers and buttons atop the windows.",
  version: "1.4.1",
  git: "https://github.com/szimmers/mobile-packages"
});

Cordova.depends({
  "cordova-plugin-camera": "2.1.1"
});

Package.onUse(function(api) {
  api.export('MeteorCamera');
  api.use(["templating", "session", "ui", "blaze", "less@1.0.0||2.0.0", "reactive-var"]);
  api.versionsFrom("METEOR@1.2");
  api.use("isobuild:cordova@5.2.0");

  api.addFiles('photo.html');
  api.addFiles('photo.js');
  api.addFiles("camera.less", ["web.browser"]);
  api.addFiles('photo-browser.js', ['web.browser']);
  api.addFiles('photo-cordova.js', ['web.cordova']);
});
