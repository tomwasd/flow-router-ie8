Package.describe({
  name: 'tomwasd:flow-router-ie8',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Polyfills required for IE8 support for flow-router',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tomwasd/flow-router-ie8',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['polyfills.js'], 'client');
});