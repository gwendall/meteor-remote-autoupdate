Package.describe({
  name: "gwendall:remote-autoupdate",
  summary: "Watch a remote server for hot code pushes",
  git: "https://github.com/gwendall/meteor-remote-autoupdate.git",
  version: "0.1.0"
});

Package.onUse(function (api, where) {

  api.versionsFrom(["METEOR@1.0.4"]);

  api.use([
    "mongo@1.1.0",
    "underscore@1.0.3",
    "tracker@1.0.6",
    "reload@1.1.3",
    "retry@1.0.3",
    "ddp@1.1.0",
  ], "client");

  api.use([
    "http@1.1.0",
    "random@1.0.3"
  ], "web.cordova");

  api.addFiles("lib/browser.js", "web.browser");
  api.addFiles("lib/cordova.js", "web.cordova");
  api.export("RemoteAutoupdate", "client");

});
