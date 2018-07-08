const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {

  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect(
          // 'Hello world!'
          // {error: 'Page not found.'}
          (res) => {
            expect(res.body).toInclude({
              error: 'Page not found.'
            })
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return users in response', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({
              name: 'Piku',
              age: 27
            })
        })
        .end(done);
    });
  })

});
