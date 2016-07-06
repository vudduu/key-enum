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
var KeyEnum = {
  it: 1,
  numbersToJump: {},
  kEnum: function (list) {
    var self = this
    var visitAll = function (list, cb) {
      for (var key in list) {
        if (!list.hasOwnProperty(key)) continue
        if (Object.prototype.toString.call(list[key]) === '[object Object]') {
          visitAll(list[key], cb)
        } else {
          cb(list, key)
        }
      }
    }

    visitAll(list, function (obj, key) {
      if (obj[key] !== null && Object.prototype.toString.call(obj[key]) === '[object Number]') {
        if (self.numbersToJump[obj[key]] !== undefined) {
          console.warn('key-enum: duplicated values on declared object')
        }
        self.numbersToJump[obj[key]] = true
      }
    })

    visitAll(list, function (obj, key) {
      while (self.numbersToJump[self.it] !== undefined) self.it++
      if (obj[key] === null) obj[key] = self.it++
    })

    return Object.freeze(list)
  }
}

/**
 * Enum the object without alter the fixed values
 *
 * @param {Object} [obj]
 * @return {Object}
 * @public
 */
function keyEnum (obj) {
  return KeyEnum.kEnum(obj)
}

/**
 * Module exports.
 * @public
 */
module.exports = keyEnum
