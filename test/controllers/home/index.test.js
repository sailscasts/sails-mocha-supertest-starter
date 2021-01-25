describe('home', () => {
  it('/ - should return 404', (done) => {
    app.get('/').expect(404, done);
  });
});
