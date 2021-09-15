export const selectedButton = (state, event) => {
	const { target } = event;
	let newState;
	if (target.id === 'cheapButton') {
		newState = {...state, cheapButton: true, fastButton: false}
	} else if (target.id === 'fastButton') {
		newState = {...state, cheapButton: false, fastButton: true}
	}
	return newState
}

export const selectedCheckbox = (state, event) => {
	const { allCheck, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck } = state;
	const { target } = event;
	let newState;
	if (target.id === 'allCheck') {
		if (allCheck) {
			newState = {...state,
				allCheck: false,
				withoutTransfersCheck: false,
				oneTransplantСheck: false,
				twoTransplantsСheck: false,
				threeTransfersСheck: false
			}
		} else {
			newState = {...state,
				allCheck: true,
				withoutTransfersCheck: true,
				oneTransplantСheck: true,
				twoTransplantsСheck: true,
				threeTransfersСheck: true
			}
		}
	} else if (target.id === 'withoutTransfersCheck') {
		if (withoutTransfersCheck) {
			newState = {...state, withoutTransfersCheck: false, allCheck: false}
		} else {
			newState = {...state, withoutTransfersCheck: true}
			if (newState.withoutTransfersCheck && newState.oneTransplantСheck && newState.twoTransplantsСheck && newState.threeTransfersСheck) {
				newState = {...newState, allCheck: true}
			}
		}
	} else if (target.id === 'oneTransplantСheck') {
		if (oneTransplantСheck) {
			newState = {...state, oneTransplantСheck: false, allCheck: false}
		} else {
			newState = {...state, oneTransplantСheck: true}
			if (newState.withoutTransfersCheck && newState.oneTransplantСheck && newState.twoTransplantsСheck && newState.threeTransfersСheck) {
				newState = {...newState, allCheck: true}
			}
		}
	} else if (target.id === 'twoTransplantsСheck') {
		if (twoTransplantsСheck) {
			newState = {...state, twoTransplantsСheck: false, allCheck: false}
		} else {
			newState = {...state, twoTransplantsСheck: true}
			if (newState.withoutTransfersCheck && newState.oneTransplantСheck && newState.twoTransplantsСheck && newState.threeTransfersСheck) {
				newState = {...newState, allCheck: true}
			}
		}
	} else if (target.id === 'threeTransfersСheck') {
		if (threeTransfersСheck) {
			newState = {...state, threeTransfersСheck: false, allCheck: false}
		} else {
			newState = {...state, threeTransfersСheck: true}
			if (newState.withoutTransfersCheck && newState.oneTransplantСheck && newState.twoTransplantsСheck && newState.threeTransfersСheck) {
				newState = {...newState, allCheck: true}
			}
		}
	}
	return newState
}

export const updateSearchId = (state, bodySearchId) => {
	const newState = {...state, loading: false, error: false, searchId: bodySearchId};
	return newState;
}

export const errorSearchId = (state, bodyError) => {
	const newState = {...state, loading: false, error: true};
	console.log(bodyError);
	return newState;
}