export const selectedButton = (state, id) => {
	const oldState = [...(state)];
	let newState;
	if (id === 'cheapButton') {
		const idx = oldState.findIndex((el) => el.id === 'cheapButton');
		const oldItem = state[idx];
		const newItem = { ...oldItem, selected: true };
		const newDateState = [...oldState.slice(0, idx), newItem, ...oldState.slice(idx + 1)];
		const idxAlt = oldState.findIndex((el) => el.id === 'fastButton');
		const oldItemAlt = state[idxAlt];
		const newItemAlt = { ...oldItemAlt, selected: false };
		const newDateStateAlt = [...newDateState.slice(0, idxAlt), newItemAlt, ...newDateState.slice(idxAlt + 1)];
		newState = newDateStateAlt;
	} else if (id === 'fastButton') {
		const idx = oldState.findIndex((el) => el.id === 'fastButton');
		const oldItem = state[idx];
		const newItem = { ...oldItem, selected: true };
		const newDateState = [...oldState.slice(0, idx), newItem, ...oldState.slice(idx + 1)];
		const idxAlt = oldState.findIndex((el) => el.id === 'cheapButton');
		const oldItemAlt = state[idxAlt];
		const newItemAlt = { ...oldItemAlt, selected: false };
		const newDateStateAlt = [...newDateState.slice(0, idxAlt), newItemAlt, ...newDateState.slice(idxAlt + 1)];
		newState = newDateStateAlt;
	}
	return newState;
}

export const selectedCheckbox = (state, id) => {
	const oldState = [...(state)];
	let newState;
	if (id === 'allCheck') {
		const idxAll = oldState.findIndex((el) => el.id === 'allCheck');
		const oldItemAll = state[idxAll];
		if (oldItemAll.checked === false) {
			const newItemAll = { ...oldItemAll, checked: true };
			const newDateStateAll = [...oldState.slice(0, idxAll), newItemAll, ...oldState.slice(idxAll + 1)];
			const idxWithout = oldState.findIndex((el) => el.id === 'withoutTransfersCheck');
			const oldItemWithout = state[idxWithout];
			const newItemWithout = { ...oldItemWithout, checked: true };
			const newDateStateWithout = [...newDateStateAll.slice(0, idxWithout), newItemWithout, ...newDateStateAll.slice(idxWithout + 1)];
			const idxOne = oldState.findIndex((el) => el.id === 'oneTransplantСheck');
			const oldItemOne = state[idxOne];
			const newItemOne = { ...oldItemOne, checked: true };
			const newDateStateOne = [...newDateStateWithout.slice(0, idxOne), newItemOne, ...newDateStateWithout.slice(idxOne + 1)];
			const idxTwo = oldState.findIndex((el) => el.id === 'twoTransplantsСheck');
			const oldItemTwo = state[idxTwo];
			const newItemTwo = { ...oldItemTwo, checked: true };
			const newDateStateTwo = [...newDateStateOne.slice(0, idxTwo), newItemTwo, ...newDateStateOne.slice(idxTwo + 1)];
			const idxThree = oldState.findIndex((el) => el.id === 'threeTransfersСheck');
			const oldItemThree = state[idxThree];
			const newItemThree = { ...oldItemThree, checked: true };
			const newDateStateThree = [...newDateStateTwo.slice(0, idxThree), newItemThree, ...newDateStateTwo.slice(idxThree + 1)];
			newState = newDateStateThree;
		} else if (oldItemAll.checked === true) {
			const newItemAll = { ...oldItemAll, checked: false };
			const newDateStateAll = [...oldState.slice(0, idxAll), newItemAll, ...oldState.slice(idxAll + 1)];
			const idxWithout = oldState.findIndex((el) => el.id === 'withoutTransfersCheck');
			const oldItemWithout = state[idxWithout];
			const newItemWithout = { ...oldItemWithout, checked: false };
			const newDateStateWithout = [...newDateStateAll.slice(0, idxWithout), newItemWithout, ...newDateStateAll.slice(idxWithout + 1)];
			const idxOne = oldState.findIndex((el) => el.id === 'oneTransplantСheck');
			const oldItemOne = state[idxOne];
			const newItemOne = { ...oldItemOne, checked: false };
			const newDateStateOne = [...newDateStateWithout.slice(0, idxOne), newItemOne, ...newDateStateWithout.slice(idxOne + 1)];
			const idxTwo = oldState.findIndex((el) => el.id === 'twoTransplantsСheck');
			const oldItemTwo = state[idxTwo];
			const newItemTwo = { ...oldItemTwo, checked: false };
			const newDateStateTwo = [...newDateStateOne.slice(0, idxTwo), newItemTwo, ...newDateStateOne.slice(idxTwo + 1)];
			const idxThree = oldState.findIndex((el) => el.id === 'threeTransfersСheck');
			const oldItemThree = state[idxThree];
			const newItemThree = { ...oldItemThree, checked: false };
			const newDateStateThree = [...newDateStateTwo.slice(0, idxThree), newItemThree, ...newDateStateTwo.slice(idxThree + 1)];
			newState = newDateStateThree;
		}
	} else if (id === 'withoutTransfersCheck') {
		const idxWithout = oldState.findIndex((el) => el.id === 'withoutTransfersCheck');
		const oldItemWithout = state[idxWithout];
		let newItemWithout;
		if (oldItemWithout.checked === false) newItemWithout = { ...oldItemWithout, checked: true };
		else newItemWithout = { ...oldItemWithout, checked: false };
		const newDateStateWithout = [...oldState.slice(0, idxWithout), newItemWithout, ...oldState.slice(idxWithout + 1)];
		let acc = 0;
		for (let i = 3; i <= 6; i++) {
			if (newDateStateWithout[i].checked === true) acc += 1;
		}
		const idxAll = oldState.findIndex((el) => el.id === 'allCheck');
		const oldItemAll = state[idxAll];
		let newItemAll;
		if (acc === 4) newItemAll = { ...oldItemAll, checked: true };
		else newItemAll = { ...oldItemAll, checked: false };
		const newDateStateAll = [...newDateStateWithout.slice(0, idxAll), newItemAll, ...newDateStateWithout.slice(idxAll + 1)];
		newState = newDateStateAll;
	} else if (id === 'oneTransplantСheck') {
		const idxOne = oldState.findIndex((el) => el.id === 'oneTransplantСheck');
		const oldItemOne = state[idxOne];
		let newItemOne;
		if (oldItemOne.checked === false) newItemOne = { ...oldItemOne, checked: true };
		else newItemOne = { ...oldItemOne, checked: false };
		const newDateStateOne = [...oldState.slice(0, idxOne), newItemOne, ...oldState.slice(idxOne + 1)];
		let acc = 0;
		for (let i = 3; i <= 6; i++) {
			if (newDateStateOne[i].checked === true) acc += 1;
		}
		const idxAll = oldState.findIndex((el) => el.id === 'allCheck');
		const oldItemAll = state[idxAll];
		let newItemAll;
		if (acc === 4) newItemAll = { ...oldItemAll, checked: true };
		else newItemAll = { ...oldItemAll, checked: false };
		const newDateStateAll = [...newDateStateOne.slice(0, idxAll), newItemAll, ...newDateStateOne.slice(idxAll + 1)];
		newState = newDateStateAll;
	} else if (id === 'twoTransplantsСheck') {
		const idxTwo = oldState.findIndex((el) => el.id === 'twoTransplantsСheck');
		const oldItemTwo = state[idxTwo];
		let newItemTwo;
		if (oldItemTwo.checked === false) newItemTwo = { ...oldItemTwo, checked: true };
		else newItemTwo = { ...oldItemTwo, checked: false };
		const newDateStateTwo = [...oldState.slice(0, idxTwo), newItemTwo, ...oldState.slice(idxTwo + 1)];
		let acc = 0;
		for (let i = 3; i <= 6; i++) {
			if (newDateStateTwo[i].checked === true) acc += 1;
		}
		const idxAll = oldState.findIndex((el) => el.id === 'allCheck');
		const oldItemAll = state[idxAll];
		let newItemAll;
		if (acc === 4) newItemAll = { ...oldItemAll, checked: true };
		else newItemAll = { ...oldItemAll, checked: false };
		const newDateStateAll = [...newDateStateTwo.slice(0, idxAll), newItemAll, ...newDateStateTwo.slice(idxAll + 1)];
		newState = newDateStateAll;
	} else if (id === 'threeTransfersСheck') {
		const idxThree = oldState.findIndex((el) => el.id === 'threeTransfersСheck');
		const oldItemThree = state[idxThree];
		let newItemThree;
		if (oldItemThree.checked === false) newItemThree = { ...oldItemThree, checked: true };
		else newItemThree = { ...oldItemThree, checked: false };
		const newDateStateThree = [...oldState.slice(0, idxThree), newItemThree, ...oldState.slice(idxThree + 1)];
		let acc = 0;
		for (let i = 3; i <= 6; i++) {
			if (newDateStateThree[i].checked === true) acc += 1;
		}
		const idxAll = oldState.findIndex((el) => el.id === 'allCheck');
		const oldItemAll = state[idxAll];
		let newItemAll;
		if (acc === 4) newItemAll = { ...oldItemAll, checked: true };
		else newItemAll = { ...oldItemAll, checked: false };
		const newDateStateAll = [...newDateStateThree.slice(0, idxAll), newItemAll, ...newDateStateThree.slice(idxAll + 1)];
		newState = newDateStateAll;
	}
	return newState;
}