'use strict'

var keyEnum = require('../index')

describe('index', function () {
  beforeEach(function () {
    spyOn(console, 'warn')
  })

  it('enum a single object', function () {
    var obj = keyEnum({a: null, b: null})
    expect(obj).toEqual(jasmine.objectContaining({
      a: 1, b: 2
    }))
    expect(console.warn).not.toHaveBeenCalled()
  })

  it('enum multiple objects', function () {
    var obj1 = keyEnum({a: null, b: null})
    var obj2 = keyEnum({a: null, b: null})
    expect(obj1).toEqual(jasmine.objectContaining({
      a: 3, b: 4
    }))
    expect(obj2).toEqual(jasmine.objectContaining({
      a: 5, b: 6
    }))
    expect(console.warn).not.toHaveBeenCalled()
  })

  it('enum object with default values', function () {
    var obj = keyEnum({
      a: null,
      b: null,
      d: 7, // default
      e: 10, // default
      f: null,
      g: null
    })
    expect(obj).toEqual(jasmine.objectContaining({
      a: 8, b: 9, d: 7, e: 10, f: 11, g: 12
    }))
    expect(console.warn).not.toHaveBeenCalled()
  })

  it('display warning when default values collide', function () {
    var obj = keyEnum({a: 100, b: 100})
    expect(obj).toEqual(jasmine.objectContaining({
      a: 100, b: 100
    }))
    expect(console.warn).toHaveBeenCalled()
  })

  it('enum objects inside objects', function () {
    var obj = keyEnum({
      a: null,
      b: null,
      c: {
        d: null, e: {
          f: null, g: null
        },
        h: {
          i: null, j: null
        }
      }
    })
    expect(obj).toEqual(jasmine.objectContaining({
      a: 13,
      b: 14,
      c: {
        d: 15,
        e: {f: 16, g: 17},
        h: {i: 18, j: 19}
      }
    }))
    expect(console.warn).not.toHaveBeenCalled()
  })

  it('enum prevents add, delete, edit properties', function () {
    var obj = keyEnum({a: null, b: null, c: null})
    expect(function () {
      obj.a = 100
      obj.b = 100
      obj.c = 100
    }).toThrow()
    expect(obj.a).toEqual(20)
    expect(obj.b).toEqual(21)
    expect(obj.c).toEqual(22)
    expect(console.warn).not.toHaveBeenCalled()
  })
})
