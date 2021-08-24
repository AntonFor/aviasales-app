import { selectedButton, selectedCheckbox } from './utilities/utilities';

const dateState = [
	{id: 'cheapButton', selected: true},
	{id: 'fastButton', selected: false},
	{id: 'allCheck', checked: false},
	{id: 'withoutTransfersCheck', checked: true},
	{id: 'oneTransplantСheck', checked: true},
	{id: 'twoTransplantsСheck', checked: true},
	{id: 'threeTransfersСheck', checked: false}
];

const reducer = (state = dateState, action) => {
	switch (action.type) {
		case 'SELECT': return selectedButton(state, action.id)
		case 'CHECKED': return selectedCheckbox(state, action.id)
		default: return state;
	}
}
	
export default reducer;