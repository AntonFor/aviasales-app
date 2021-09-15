import { selectedButton, selectedCheckbox, updateSearchId, errorSearchId } from './utilities/utilities';

const dateState = {
	cheapButton: true,
	fastButton: false,
	allCheck: false,
	withoutTransfersCheck: true,
	oneTransplantСheck: true,
	twoTransplantsСheck: true,
	threeTransfersСheck: false,
	loading: true,
	error: false,
	searchId: null
}

const reducer = (state = dateState, action) => {
	switch (action.type) {
		case 'SELECT': return selectedButton(state, action.event)
		case 'CHECKED': return selectedCheckbox(state, action.event)
		case 'UPDATE_SEARCH_ID': return updateSearchId(state, action.body)
		case 'ERROR_SEARCH_ID': return errorSearchId(state, action.error)
		default: return state;
	}
}
	
export default reducer;