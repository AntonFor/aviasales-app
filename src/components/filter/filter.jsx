import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import classes from './filter.module.scss';

import * as actions from '../../actions';

const Filter = ({ allCheck, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck, onChange }) => (
	<div className={classes.filter}>
		<p className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='allCheck'
				type="checkbox"
				checked={allCheck}
				onChange={(event) => onChange(event)}
			/>
			Все
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='withoutTransfersCheck'
				type="checkbox"
				checked={withoutTransfersCheck}
				onChange={(event) => onChange(event)}
			/>
			Без пересадок
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='oneTransplantСheck'
				type="checkbox"
				checked={oneTransplantСheck}
				onChange={(event) => onChange(event)}
			/>
			1 пересадка
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='twoTransplantsСheck'
				type="checkbox"
				checked={twoTransplantsСheck}
				onChange={(event) => onChange(event)}
			/>
			2 пересадки
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='threeTransfersСheck'
				type="checkbox"
				checked={threeTransfersСheck}
				onChange={(event) => onChange(event)}
			/>
			3 пересадки
		</label>
	</div>
)

Filter.defaultProps = {
	allCheck: false,
	withoutTransfersCheck: false,
	oneTransplantСheck: false,
	twoTransplantsСheck: false,
	threeTransfersСheck: false,
	onChange: () => {},
};
	
Filter.propTypes = {
	allCheck: PropTypes.bool,
	withoutTransfersCheck: PropTypes.bool,
	oneTransplantСheck: PropTypes.bool,
	twoTransplantsСheck: PropTypes.bool,
	threeTransfersСheck: PropTypes.bool,
	onChange: PropTypes.func,
};

const mapStateToProps = (state) => {
	const { allCheck, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck } = state;
	return ({
		allCheck,
		withoutTransfersCheck,
		oneTransplantСheck,
		twoTransplantsСheck,
		threeTransfersСheck
	})
}

const mapDispatchToProps = (dispatch) => {
	const { checked } = bindActionCreators(actions, dispatch);
	return ({
		onChange: checked
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);