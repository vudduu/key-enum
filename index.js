/*!
 * key-enum
 * Copyright(c) 2016 Edwin Guzman
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 *
 * @private
 */
var it = 1
var numbersToJump = {}
var duplicatedValues

/**
 * Visit all the keys in a object of objects
 *
 * @param {Object} list
 * @param {Function} cb
 */
var visitAll = function visitAll (list, cb) {
  for (var key in list) {
    if (!list.hasOwnProperty(key)) continue
    if (Object.prototype.toString.call(list[key]) === '[object Object]') {
      visitAll(list[key], cb)
    } else {
      cb(list, key)
    }
  }
}

/**
 * Enum the object without alter the fixed values
 *
 * @param {Object} [obj]
 * @return {Object}
 * @public
 */
function keyEnum (list) {
  duplicatedValues = false
  visitAll(list, function fn1 (obj, key) {
    if (obj[key] !== null && Object.prototype.toString.call(obj[key]) === '[object Number]') {
      if (numbersToJump[obj[key]] !== undefined) {
        duplicatedValues = true
      }
      numbersToJump[obj[key]] = true
    }
  })
  if (duplicatedValues) console.warn('key-enum: duplicated values on declared object')
  visitAll(list, function fn2 (obj, key) {
    while (numbersToJump[it] !== undefined) it++
    if (obj[key] === null) obj[key] = it++
  })
  return Object.freeze(list)
}

/**
 * Module exports.
 * @public
 */
module.exports = keyEnum
