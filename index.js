/*!
 * key-enum
 * Copyright(c) 2016 Edwin Guzman
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 *
 * @private
 */
var KeyEnum = {
    it: 0,
    numbersToJump: {},
    kEnum: function(list) {
        var self = this;
        var dfs = function(list, cb) {
            for(var key in list) {
                if (!list.hasOwnProperty(key)) continue;
                if(toString.call(list[key]) == "[object Object]") {
                    dfs(list[key], cb);
                } else {
                    cb(list, key);
                }
            }
        };

        dfs(list, function(obj, key) {
            if(obj[key] !== null && toString.call(obj[key]) == "[object Number]") {
                if(!!self.numbersToJump[obj[key]])
                    console.warn("key-enum: duplicated values on declared object");
                self.numbersToJump[obj[key]] = true;
            }
        });

        dfs(list, function(obj, key) {
            while(!!self.numbersToJump[self.it]) self.it++;
            if(obj[key] === null) obj[key] = self.it++;
        });

        return Object.freeze(list);
    }
};

/**
 * Enum the object without alter the fixed values
 *
 * @param {Object} [obj]
 * @return {Object}
 * @public
 */
function keyEnum(obj) {
    return KeyEnum.kEnum(obj);
}

/**
 * Module exports.
 * @public
 */
module.exports = keyEnum;
