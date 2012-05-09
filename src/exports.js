//
if (typeof exports === 'object' && exports) { // Make S as a Node module, if possible.
	exports.S = S;
} else { // Expose S to the global object.
	var _S = GLOBAL.S;
	S.noConflict = function() {
		GLOBAL.S = _S;
		return S;
	};
	GLOBAL.S = S;
}
