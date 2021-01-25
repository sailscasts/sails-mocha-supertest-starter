// config/env/test.js
module.exports = {
  // Skip grunt hook as we won't be needing it for running our tests
  hooks: {
    grunt: false
  },
  // Disable all logs except warnings and errors.
  log: {
    level: 'warn'
  },
  // We want to drop our database before run our tests to have a clean database each time
  models: {
    migrate: 'drop'
  },
  // We want to use the built in sails-disks storage for our tests.
  // You can set up any database you want really in here.
  datastores: {
    default: {
      adapter: 'sails-disk'
    }
  }
};
