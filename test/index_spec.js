'use strict';

var keyEnum = require('../index');

describe('index', function() {
    beforeEach(function(){
        spyOn(console, 'warn');
    });

    it('enum a single object', function() {
        var obj = keyEnum({a:null, b:null});
        expect(obj).toEqual(jasmine.objectContaining({
            a:0, b:1
        }));
        expect(console.warn).not.toHaveBeenCalled();
    });

    it('enum multiple objects', function() {
        var obj1 = keyEnum({a:null, b:null});
        var obj2 = keyEnum({a:null, b:null});
        expect(obj1).toEqual(jasmine.objectContaining({
            a:2, b:3
        }));
        expect(obj2).toEqual(jasmine.objectContaining({
            a:4, b:5
        }));
        expect(console.warn).not.toHaveBeenCalled();
    });

    it('enum object with default values', function() {
        var obj = keyEnum({
            a:null,
            b:null,
            d:7, // default
            e:10, // default
            f:null,
            g:null
        });
        expect(obj).toEqual(jasmine.objectContaining({
            a: 6, b: 8, d: 7, e: 10, f: 9, g: 11
        }));
        expect(console.warn).not.toHaveBeenCalled();
    });

    it('display warning when default values collide', function() {
        var obj = keyEnum({a:100, b:100});
        expect(obj).toEqual(jasmine.objectContaining({
            a:100, b:100
        }));
        expect(console.warn).toHaveBeenCalled();
    });

    it('enum objects inside objects', function() {
        var obj = keyEnum({
            a:null,
            b:null,
            c:{
                d:null, e:{
                    f:null, g:null
                },
                h:{
                    i:null, j:null
                }
            }
        });
        expect(obj).toEqual(jasmine.objectContaining({
            a: 12,
            b: 13,
            c: {
                d: 14,
                e: { f: 15, g: 16 },
                h: { i: 17, j: 18 }
            }
        }));
        expect(console.warn).not.toHaveBeenCalled();
    });

    it('enum prevents add, delete, edit properties', function() {
        var obj = keyEnum({a:null, b:null, c:null});
        expect(function(){
            obj.a = 100;
            obj.b = 100;
            obj.c = 100;
        }).toThrow();
        expect(obj.a).toEqual(19);
        expect(obj.b).toEqual(20);
        expect(obj.c).toEqual(21);
        expect(console.warn).not.toHaveBeenCalled();
    });
});
