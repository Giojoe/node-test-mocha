const expect = require('expect');

const utils = require('./utils.js');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var result = utils.add(25, 52);
    
      expect(result).toBe(77).toBeA('number');       
      });

    it('should Async add two numbers', (done) => {
      utils.asyncAdd(4, 5 , (sum) => {
        expect(sum).toBe(9).toBeA('number');
        done();
      });
    });
  }); 

  describe('#square', () => {
    it('should square numbers', () => {
      var result = utils.square(8);
  
      expect(result).toBe(16).toBeA('number');
    })
  
    it('should async square a number', (done) => {
      utils.asyncSquare(7, (result) => {
        expect(result).toBe(49).toBeA('number');
        done();
      });
    })
  });
  
});

// should verify frstname and lastname are set
// assert it includes firstName and lastName with proper values
it('should set firstname and lastname', () => {
  var user = ({location: 'Bangkok', age: 22});
  var result = utils.setName(user, 'Jaturon Kumo');

  // expect(result).toEqual(user);

  expect(result).toInclude({
    firstName: 'Jaturon',
    lastName: 'Kumo'
  });
})


// it('should expect some value', () => {
//   // expect(23).toNotBe(23);
//   // expect({name:'jaturon'}).toEqual({name: 'Jaturon'});
//   // expect([1,2,4]).toExclude(3);
//   expect({
//     name: 'Jaturon',
//     age: 22,
//     location: 'Bangkok'
//   }).toExclude({
//     age: 21
//   })
// });
