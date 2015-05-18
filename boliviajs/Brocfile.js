/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('vendor/web_started_kit/styles/main.css');
app.import('vendor/web_started_kit/styles/components.css');
app.import('vendor/web_started_kit/scripts/main.min.js');
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Bold.eot', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Bold.ttf', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Bold.woff', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-BoldItalic.eot', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-BoldItalic.ttf', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-BoldItalic.woff', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Italic.eot', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Italic.ttf', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Italic.woff', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Light.eot', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Light.ttf', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Light.woff', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-LightItalic.eot', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-LightItalic.ttf', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-LightItalic.woff', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Regular.eot', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Regular.ttf', {destDir: 'fonts'});
app.import('vendor/web_started_kit/fonts/RobotoCondensed-Regular.woff', {destDir: 'fonts'});

app.import('vendor/web_started_kit/images/hamburger.svg', {destDir: 'images'});

app.import('vendor/web_started_kit/images/icons/icons-hinted.ttf', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/icons.eot', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/icons.svg', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/icons.ttf', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/icons.woff', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/icons.woff2', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/placeholder--medium.png', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/placeholder--small.png', {destDir: 'images/icons'});
app.import('vendor/web_started_kit/images/icons/placeholder--wide.png', {destDir: 'images/icons'});

app.import('vendor/web_started_kit/images/touch/apple-touch-icon.png', {destDir: 'images/touch'});
app.import('vendor/web_started_kit/images/touch/chrome-touch-icon-192x192.png', {destDir: 'images/touch'});
app.import('vendor/web_started_kit/images/touch/icon-128x128.png', {destDir: 'images/touch'});
app.import('vendor/web_started_kit/images/touch/ms-touch-icon-144x144-precomposed.png', {destDir: 'images/touch'});

module.exports = app.toTree();
