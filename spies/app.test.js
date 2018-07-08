const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Bambi', 25);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Bambi', 25);
  })

  it('should call saveUser with user object', () => {
    var email = 'test@test.pl';
    var password = '1234';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
