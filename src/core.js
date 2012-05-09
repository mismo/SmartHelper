/*
 * Tidy jQuery core
 */
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
var indexOf = Array.prototype.indexOf;
var trim = String.prototype.trim;
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
var class2type = {};
var S = {
	debug : '@DEBUG',

	guid : 1,

	noop : function() {
	},

	now : Date.now || function() {
		return (new Date()).getTime();
	},

	log : function(msg) {
		if (S.debug && typeof console !== 'undefined') {
			console.log(msg);
		}
	},

	error : function(msg) {
		throw new Error(msg);
	},

	type : function(obj) {
		return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
	},

	isFunction : function(obj) {
		return S.type(obj) === 'function';
	},

	isArray : Array.isArray || function(obj) {
		return S.type(obj) === 'array';
	},

	isNumeric : function(obj) {
		return !isNaN(parseFloat(obj)) && isFinite(obj);
	},

	isPlainObject : function(obj) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if (!obj || S.type(obj) !== 'object' || obj.nodeType || S.isWindow(obj)) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if (obj.constructor && !hasOwn.call(obj, 'constructor')) {
				if (!hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
					return false;
				}
			}
		} catch (e) {
			// IE8,9 Will throw exceptions on certain host objects
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for (key in obj) {
		}

		return key === UNDEF || hasOwn.call(obj, key);
	},

	isEmptyObject : function(obj) {
		for ( var name in obj) {
			return false;
		}
		return true;
	},

	isWindow : function(obj) {
		return obj != null && obj == obj.window;
	},

	// Use native String.trim function wherever possible
	trim : trim ? function(text) {
		return text == null ? '' : trim.call(text);
	} :
	// Otherwise use our own trimming functionality
	function(text) {
		return text == null ? '' : text.toString().replace(trimLeft, '').replace(trimRight, '');
	},

	indexOf : function(item, array, i) {
		var len;

		if (array) {
			if (indexOf) {
				return indexOf.call(array, item, i);
			}

			len = array.length;
			i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

			for (; i < len; i++) {
				// Skip accessing in sparse arrays
				if (i in array && array[i] === item) {
					return i;
				}
			}
		}

		return -1;
	},

	extend : function() {
		var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1;
		var length = arguments.length, deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== 'object' && !S.isFunction(target)) {
			target = {};
		}

		// extend S itself if only one argument is passed
		if (length === i) {
			target = this;
			--i;
		}

		for (; i < length; i++) {
			// Only deal with non-null/UNDEF values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (S.isPlainObject(copy) || (copyIsArray = S.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && S.isArray(src) ? src : [];

						} else {
							clone = src && S.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = S.extend(deep, clone, copy);

						// Don't bring in UNDEF values
					} else if (copy !== UNDEF) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	},

	// args is for internal usage only
	each : function(object, callback, args) {
		var name, i = 0, length = object.length;
		var isObj = length === UNDEF || S.isFunction(object);

		if (args) {
			if (isObj) {
				for (name in object) {
					if (callback.apply(object[name], args) === false) {
						break;
					}
				}
			} else {
				for (; i < length;) {
					if (callback.apply(object[i++], args) === false) {
						break;
					}
				}
			}

			// A special, fast, case for the most common use of each
		} else {
			if (isObj) {
				for (name in object) {
					if (callback.call(object[name], name, object[name]) === false) {
						break;
					}
				}
			} else {
				for (; i < length;) {
					if (callback.call(object[i], i, object[i++]) === false) {
						break;
					}
				}
			}
		}

		return object;
	},

	grep : function(items, callback, inv) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = items.length; i < length; i++) {
			retVal = !!callback(items[i], i);
			if (inv !== retVal) {
				ret.push(items[i]);
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map : function(items, callback, arg) {
		var value, key, ret = [], i = 0, length = items.length;

		var isArray = false;
		if (length !== UNDEF && typeof length === 'number') {
			isArray = length > 0 && items[0] && items[length - 1];
			if (!isArray) {
				isArray = length === 0 || S.isArray(items);
			}
		}

		// Go through the array, translating each of the items to their
		if (isArray) {
			for (; i < length; i++) {
				value = callback(items[i], i, arg);

				if (value != null) {
					ret[ret.length] = value;
				}
			}

			// Go through every key on the object,
		} else {
			for (key in items) {
				value = callback(items[key], key, arg);

				if (value != null) {
					ret[ret.length] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply([], ret);
	}
};

// Populate the class2type map
S.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function(i, name) {
	class2type['[object ' + name + ']'] = name.toLowerCase();
});
