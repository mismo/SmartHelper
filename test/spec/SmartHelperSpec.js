var t = this;
describe('#Smart', function() {
	var S = (function() {
		// TODO: CommonJS
		return t.S;
	})();
	if (!S) {
		return;
	}

	describe('#core', function() {
		/*
		 * 
		 */
		it('guid', function() {
			expect(S.guid).toBeTruthy();
		});

		it('guid type', function() {
			expect(S.type(S.guid)).toEqual('number');
		});

		/*
		 * 
		 */
		it('noop', function() {
			expect(S.isFunction(S.noop)).toEqual(true);
		});

		/*
		 * 
		 */
		it('now', function() {
			expect(S.isFunction(S.now)).toEqual(true);
		});

		/*
		 * 
		 */
		it('log', function() {
			expect(S.isFunction(S.log)).toEqual(true);
		});

		/*
		 * 
		 */
		it('error', function() {
			expect(S.isFunction(S.error)).toEqual(true);
		});

		it('error(message)', function() {
			var msg = 'test error with message';
			expect(function() {
				S.error(msg);
			}).toThrow(msg);
		});

		/*
		 * 
		 */
		it('type', function() {
			expect(S.isFunction(S.type)).toEqual(true);
		});

		it('type()', function() {
			expect(S.type()).toEqual('undefined');
		});

		it('type(null)', function() {
			expect(S.type(null)).toEqual('null');
		});

		it('type(false)', function() {
			expect(S.type(false)).toEqual('boolean');
		});

		it('type(true)', function() {
			expect(S.type(true)).toEqual('boolean');
		});

		it('type(Boolean(0))', function() {
			expect(S.type(Boolean(0))).toEqual('boolean');
		});

		it('type(0)', function() {
			expect(S.type(0)).toEqual('number');
		});

		it('type(1)', function() {
			expect(S.type(1)).toEqual('number');
		});

		it('type(2.1)', function() {
			expect(S.type(2.1)).toEqual('number');
		});

		it('type(-2)', function() {
			expect(S.type(-2)).toEqual('number');
		});

		it('type(1/0)', function() {
			expect(S.type(1 / 0)).toEqual('number');
		});

		it('type(\'\')', function() {
			expect(S.type('')).toEqual('string');
		});

		it('type(\'abc123\')', function() {
			expect(S.type('abc123')).toEqual('string');
		});

		it('type([])', function() {
			expect(S.type([])).toEqual('array');
		});

		it('type([1,2])', function() {
			expect(S.type([ 1, 2 ])).toEqual('array');
		});

		it('type(new Object())', function() {
			expect(S.type(new Object())).toEqual('object');
		});

		it('type({})', function() {
			expect(S.type({})).toEqual('object');
		});

		it('type({a:1})', function() {
			expect(S.type({
				a : 1
			})).toEqual('object');
		});

		it('type(function(){})', function() {
			expect(S.type(function() {
			})).toEqual('function');
		});

		it('type(S.noop)', function() {
			expect(S.type(S.noop)).toEqual('function');
		});

		it('type(fn)', function() {
			var fn = function() {
				return 0;
			};
			expect(S.type(fn)).toEqual('function');
		});

		it('type(new Date())', function() {
			expect(S.type(new Date())).toEqual('date');
		});

		it('type(new RegExp())', function() {
			expect(S.type(new RegExp())).toEqual('regexp');
		});

		it('type(/\w/)', function() {
			expect(S.type(/\w/)).toEqual('regexp');
		});

		/*
		 * 
		 */
		it('isFunction', function() {
			expect(S.isFunction).toBeTruthy();
		});

		it('isFunction()', function() {
			expect(S.isFunction()).toEqual(false);
		});

		it('isFunction(null)', function() {
			expect(S.isFunction(null)).toEqual(false);
		});

		it('isFunction(S.noop)', function() {
			expect(S.isFunction(S.noop)).toEqual(true);
		});

		it('isFunction(fn)', function() {
			var fn = function() {
				return 1;
			};
			expect(S.isFunction(fn)).toEqual(true);
		});

		/*
		 * 
		 */
		it('isArray', function() {
			expect(S.isFunction(S.isArray)).toEqual(true);
		});

		it('isArray()', function() {
			expect(S.isArray()).toEqual(false);
		});

		it('isArray(null)', function() {
			expect(S.isArray(null)).toEqual(false);
		});

		it('isArray([])', function() {
			expect(S.isArray([])).toEqual(true);
		});

		it('isArray([1,2])', function() {
			expect(S.isArray([ 1, 2 ])).toEqual(true);
		});

		it('isArray({length:0})', function() {
			expect(S.isArray({
				length : 0
			})).toEqual(false);
		});

		it('isArray({length:2,0:123,1:321})', function() {
			expect(S.isArray({
				length : 2,
				0 : 123,
				1 : 321
			})).toEqual(false);
		});

		/*
		 * 
		 */
		it('isNumeric', function() {
			expect(S.isFunction(S.isNumeric)).toEqual(true);
		});

		it('isNumeric(0)', function() {
			expect(S.isNumeric(0)).toEqual(true);
		});

		it('isNumeric(-1)', function() {
			expect(S.isNumeric(-1)).toEqual(true);
		});

		it('isNumeric(\'2\')', function() {
			expect(S.isNumeric('2')).toEqual(true);
		});

		it('isNumeric(1.234)', function() {
			expect(S.isNumeric(1.234)).toEqual(true);
		});

		it('isNumeric("0.00")', function() {
			expect(S.isNumeric("0.00")).toEqual(true);
		});

		it('isNumeric("2L")', function() {
			expect(S.isNumeric("2L")).toEqual(false);
		});

		it('isNumeric(2/0)', function() {
			expect(S.isNumeric(2 / 0)).toEqual(false);
		});

		/*
		 * 
		 */
		it('isPlainObject', function() {
			expect(S.isFunction(S.isPlainObject)).toEqual(true);
		});

		it('isPlainObject()', function() {
			expect(S.isPlainObject()).toEqual(false);
		});

		it('isPlainObject(null)', function() {
			expect(S.isPlainObject(null)).toEqual(false);
		});

		it('isPlainObject(function(){})', function() {
			expect(S.isPlainObject(function() {
			})).toEqual(false);
		});

		it('isPlainObject(this)', function() {
			expect(S.isPlainObject(this)).toEqual(false);
		});

		it('isPlainObject({})', function() {
			expect(S.isPlainObject({})).toEqual(true);
		});

		it('isPlainObject(new Object())', function() {
			expect(S.isPlainObject(new Object())).toEqual(true);
		});

		it('isPlainObject({a:1})', function() {
			expect(S.isPlainObject({
				a : 1
			})).toEqual(true);
		});

		it('isPlainObject(S)', function() {
			expect(S.isPlainObject(S)).toEqual(true);
		});

		/*
		 * 
		 */
		it('isEmptyObject', function() {
			expect(S.isFunction(S.isEmptyObject)).toEqual(true);
		});

		it('isEmptyObject({})', function() {
			expect(S.isEmptyObject({})).toEqual(true);
		});

		it('isEmptyObject(new Object())', function() {
			expect(S.isEmptyObject(new Object())).toEqual(true);
		});

		it('isEmptyObject({a:1})', function() {
			expect(S.isEmptyObject({
				a : 1
			})).toEqual(false);
		});

		// Chrome pass, IE8 not pass.
		// it('isEmptyObject({constructor:function(){}})', function() {
		// expect(S.isEmptyObject({
		// constructor : function() {
		// }
		// })).toEqual(false);
		// });

		/*
		 * 
		 */
		it('isWindow', function() {
			expect(S.isFunction(S.isWindow)).toEqual(true);
		});

		it('isWindow(this)', function() {
			if (t.window) {
				expect(S.isWindow(t)).toEqual(true);
			}
		});

		/*
		 * 
		 */
		it('trim', function() {
			expect(S.isFunction(S.trim)).toEqual(true);
		});

		it('trim()', function() {
			expect(S.trim()).toEqual('');
		});

		it('trim(null)', function() {
			expect(S.trim(null)).toEqual('');
		});

		it('trim no blank', function() {
			expect(S.trim('abc')).toEqual('abc');
		});

		it('trim left', function() {
			expect(S.trim('   abc')).toEqual('abc');
		});

		it('trim right', function() {
			expect(S.trim('abc ')).toEqual('abc');
		});

		it('trim left & right', function() {
			expect(S.trim(' abc  ')).toEqual('abc');
		});

		/*
		 * 
		 */
		it('indexOf', function() {
			expect(S.isFunction(S.indexOf)).toEqual(true);
		});

		it('indexOf found', function() {
			expect(S.indexOf(1, [ 3, 2, 1, 0 ])).toEqual(2);
		});

		it('indexOf found string', function() {
			expect(S.indexOf('b', [ 'a', 'b', 3, 'd' ])).toEqual(1);
		});

		it('indexOf found reverse', function() {
			expect(S.indexOf(1, [ 3, 2, 1, 0 ], -3)).toEqual(2);
		});

		it('indexOf not found', function() {
			expect(S.indexOf(5, [ 3, 2, 1, 0 ])).toEqual(-1);
		});

		it('indexOf not found reverse', function() {
			expect(S.indexOf(1, [ 3, 2, 1, 0 ], -1)).toEqual(-1);
		});

		/*
		 * 
		 */
		it('extend', function() {
			expect(S.isFunction(S.extend)).toEqual(true);
		});

		it('extend(a, b)', function() {
			var a = {}, b = {
				size : 123,
				fn : function() {
					return 'ok';
				}
			};
			S.extend(a, b);
			expect(a.size).toEqual(123);
			expect(a.fn()).toEqual('ok');
		});

		it('extend(a, bbb)', function() {
			var a = {}, b = {
				sub1 : {
					sub2 : {
						size : 100
					}
				}
			};
			S.extend(a, b);
			a.sub1.sub2.size = 123;
			expect(b.sub1.sub2.size).toEqual(123);
			expect(a.sub1.sub2 === b.sub1.sub2).toEqual(true);
		});

		it('extend(true, a, bbb)', function() {
			var a = {}, b = {
				sub1 : {
					sub2 : {
						size : 100
					}
				}
			};
			S.extend(true, a, b);
			a.sub1.sub2.size = 123;
			expect(b.sub1.sub2.size).toEqual(100);
			expect(a.sub1.sub2 === b.sub1.sub2).toEqual(false);
		});

		/*
		 * 
		 */
		it('each', function() {
			expect(S.isFunction(S.each)).toEqual(true);
		});

		it('each object', function() {
			var sum = 0, obj = {
				a : 1,
				b : 2,
				c : 3
			}, cb = function(k, v) {
				sum += v;
			};
			S.each(obj, cb);
			expect(sum).toEqual(6);
		});

		it('each array', function() {
			var sum = '', arr = [ 'a', 'b', 'c' ], cb = function(index, item) {
				sum += item;
			};
			S.each(arr, cb);
			expect(sum).toEqual('abc');
		});

		it('each object with break', function() {
			var sum = 0, obj = {
				a : 1,
				b : 2,
				c : 3
			}, cb = function(k, v) {
				sum += v;
				if (k == 'b') {
					return false;
				}
			};
			S.each(obj, cb);
			expect(sum).toEqual(3);
		});

		it('each array with break', function() {
			var sum = '', arr = [ 'a', 'b', 'c' ], cb = function(index, item) {
				sum += item;
				if (index === 1) {
					return false;
				}
			};
			S.each(arr, cb);
			expect(sum).toEqual('ab');
		});

		/*
		 * 
		 */
		it('grep', function() {
			expect(S.isFunction(S.grep)).toEqual(true);
		});

		it('grep', function() {
			var items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], callback = function(item, index) {
				return index % 2 === 0;
			}, inv = true;
			var ret = S.grep(items, callback, inv);
			expect(S.isArray(ret)).toEqual(true);
			expect(ret.length).toEqual(4);
			expect(ret.join(',')).toEqual('2,4,6,8');
		});

		it('grep', function() {
			var items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], callback = function(item, index) {
				return index % 2 === 0;
			}, inv = false;
			var ret = S.grep(items, callback, inv);
			expect(S.isArray(ret)).toEqual(true);
			expect(ret.length).toEqual(5);
			expect(ret.join(',')).toEqual('1,3,5,7,9');
		});

		/*
		 * 
		 */
		it('map', function() {
			expect(S.isFunction(S.map)).toEqual(true);
		});

		it('map array', function() {
			var items = [ 1, 2, 3, 4 ], callback = function(item, index, arg) {
				return item * 3;
			}, a;
			var ret = S.map(items, callback, a);
			expect(S.isArray(ret)).toEqual(true);
			expect(ret.length).toEqual(4);
			expect(ret.join(',')).toEqual('3,6,9,12');
		});

		it('map object', function() {
			var items = {
				a : 1,
				b : 2,
				c : 3
			}, callback = function(value, key, arg) {
				return value * 3;
			}, a;
			var ret = S.map(items, callback, a);
			expect(S.isArray(ret)).toEqual(true);
			expect(ret.length).toEqual(3);
			expect(ret.join(',')).toEqual('3,6,9');
		});

		it('map object with some return null', function() {
			var items = {
				a : 1,
				b : 2,
				c : 3
			}, callback = function(value, key, arg) {
				if (key !== 'b') {
					return value * 3;
				}
			}, a;
			var ret = S.map(items, callback, a);
			expect(S.isArray(ret)).toEqual(true);
			expect(ret.length).toEqual(2);
			expect(ret.join(',')).toEqual('3,9');
		});

	}); // end #core

}); // end #Smart
