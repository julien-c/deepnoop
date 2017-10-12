/**
 * Noop object with arbitrary number of nested attributes that are also noop.
 */
exports.deepNoop = () => {
	const noop = new Proxy(() => {}, {
		get: () => noop
	});
	return noop;
}
