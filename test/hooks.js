const sails = require('sails');


exports.mochaHooks = {
  beforeAll(done) {
    sails.lift({
      environment: 'test'
    }, (error, sails) => {
      global.app = require('supertest')(sails.hooks.http.app);
      return done(error, sails);
    });
  },
  afterAll (done) {
    try {
      sails.lower(done);
    } catch (error) {
      return done(error);
    }
  }
};
