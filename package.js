var options = {
  "version": "0.8.0",
  "where": "client",
  "packageName": "codelovers:angular-loading-bar"
};

// meta data
Package.describe({
  name: options.packageName,
  version: options.version,
  summary: 'An automatic loading bar for AngularJS',
  git: 'https://github.com/chieffancypants/angular-loading-bar.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0', 'METEOR@1.0');
  api.use('angular:angular@1.2.9', options.where);
  api.addFiles([
    'build/loading-bar.js',
    'build/loading-bar.css'
  ], options.where);
});
