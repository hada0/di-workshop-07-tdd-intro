var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  // Uncomment this 👇
  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  // Uncomment this 👇
  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should divide', function() {
    result = mm.divide(63, 7)
    expect(result).to.equal(9)
  })

  it('should double', function() {
    result = mm.double(4)
    expect(result).to.equal(8)
  })

  it('should take the lowest number', function() {
    result = mm.lowest(11, 55)
    expect(result).to.equal(11)
  })
})
