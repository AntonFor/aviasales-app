export const selectedButton = (state, event) => {
	const { target } = event;
	const { tickets } = state;
	const newTickets = [...tickets];
	let newState;
	if (target.id === 'cheapButton') {
		newTickets.sort((prev, next) => (prev.price - next.price));
		newState = {...state, cheapButton: true, fastButton: false, tickets: newTickets};
	} else if (target.id === 'fastButton') {
		newTickets.sort((prev, next) => (prev.segments[0].duration - next.segments[0].duration));
		newState = {...state, cheapButton: false, fastButton: true, tickets: newTickets};
	}
	return newState
}

export const selectedButtonDefoult = (state) => {
	const { tickets } = state;
	const newTickets = [...tickets];
	newTickets.sort((prev, next) => (prev.price - next.price));
	const	newState = {...state, tickets: newTickets};
	return newState;
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
	return newState;
}

export const selectedCheckboxDefoult = () => {}

export const updateSearchId = (state, bodySearchId) => {
	const newState = {...state, loading: false, error: false, searchId: bodySearchId.searchId};
	return newState;
}

export const errorSearchId = (state, bodyError) => {
	const newState = {...state, loading: false, error: true};
	console.log(bodyError);
	return newState;
}

export const updateTickets = (state, bodyTickets) => {
	const { tickets } = state;
	let ticketsNew = [...tickets];
	ticketsNew = [...ticketsNew, ...bodyTickets.tickets];
	const newState = {...state, loading: false, error: false, tickets: ticketsNew, stop: bodyTickets.stop};
	return newState;
}

export const errorTickets = (state, bodyError) => {
	const newState = {...state, loading: false, error: true};
	console.log(bodyError);
	return newState;
}

export const stopsTitle = (length) => {
	switch (length) {
		case 0: return 'БЕЗ ПЕРЕСАДОК'
		case 1: return '1 ПЕРЕСАДКА'
		case 2: return '2 ПЕРЕСАДКИ'
		case 3: return '3 ПЕРЕСАДКИ'
		case 4: return '4 ПЕРЕСАДКИ'
		default: return 'ОШИБКА!'
	}
}

export const getHoursTicket = (date) => {
	let hours = (new Date(date)).getHours();
	hours = hours < 10 ? `0${hours}` : hours;
	return hours;
}

export const getMinutesTicket = (date) => {
	let minutes = (new Date(date)).getMinutes();
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	return minutes;
}