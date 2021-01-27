const sails = require('sails');


exports.mochaHooks = {
  beforeAll(done) {
    sails.lift({
      environment: 'test'
    }, (error, sails) => {
      if (error) {return done(error);}
      global.app = require('supertest')(sails.hooks.http.app);
      return done();
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
