const sortButtonDate = [
	{id: 'cheap-button', class: 'selected'},
	{id: 'fast-button', class: ''}
]

const reducer = (state = sortButtonDate, action) => {
	switch (action.type) {
		case 'SELECT_FAST': {
			return ([
				{id: 'cheap-button', class: ''},
				{id: 'fast-button', class: 'selected'}
			])
		}
		case 'SELECT_CHEAP': {
			return ([
				{id: 'cheap-button', class: 'selected'},
				{id: 'fast-button', class: ''}
			]);
		}
		default: return state;
	}
}

export default reducer;