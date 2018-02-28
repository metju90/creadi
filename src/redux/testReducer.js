export default function (state = {
	checked: false,
	session: {
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
