export default function (state = {
	ccc: false,
	ddd: {
		active: false,
	},
}, action = {}) {
	switch (action.type) {
		case 'aaa':
			return Object.assign({}, state, {
				errorMessage: null,
			});
		default:
			return { errorViva: false }
	}
}
