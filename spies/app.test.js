const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App Express spy', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Joe', 22);
    expect(spy).toHaveBeenCalledWith('Joe',22);
  });

  it('should call saveUser with user object', () => {
    var email = 'qwerty@gmail.com'
    var password = '12345'

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password})

  });
});