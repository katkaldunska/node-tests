const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two number', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(9);
      expect(res).toBe(81).toBeA('number')
    });

    it('should async square a number', (done) => {
      utils.asyncSquare(9, (res) => {
        expect(res).toBe(81).toBeA('number');
        done();
      });
    });
  });
  
  it('should verify first and last name', () => {
    var user = {
      firstName: 'Prename',
      lastName: 'Presurname',
      hasYolkHands: false,
      age: 44
    };
    var res = utils.setName(user, 'Piotr Kurek');
    expect(res).toInclude({firstName: 'Piotr', lastName: 'Kurek'});
    expect(res).toNotEqual(user);
  })

  // it('should expext some values', () => {
  //   // expect(12).toNotBe(12);
  //   // expect({name: 'Bambi'}).toBe({name: 'Bambi'});
  //   // expect({name: 'Bambi'}).toNotEqual({name: 'Bambi'});
  //   expect({name: 'Bambi'}).toEqual({name: 'Bambi'});
  //   expect([2, 3, 4]).toInclude(2);
  //   expect([2, 3, 4]).toExclude('t');
  //   expect({
  //     a: 'a',
  //     b: 'b',
  //     c: 1
  //   }).toInclude({
  //     a: 'a'
  //   })
  // });
});
