import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import classes from './filter.module.scss';

import * as actions from '../../actions';

const Filter = ({ filterCheckDate, onChange }) => (
	<div className={classes.filter}>
		<p className={classes.filter__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='allCheck'
				type="checkbox"
				checked={filterCheckDate.allCheck}
				onChange={(event) => onChange(event)}
			/>
			Все
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='withoutTransfersCheck'
				type="checkbox"
				checked={filterCheckDate.withoutTransfersCheck}
				onChange={(event) => onChange(event)}
			/>
			Без пересадок
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='oneTransplantСheck'
				type="checkbox"
				checked={filterCheckDate.oneTransplantСheck}
				onChange={(event) => onChange(event)}
			/>
			1 пересадка
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='twoTransplantsСheck'
				type="checkbox"
				checked={filterCheckDate.twoTransplantsСheck}
				onChange={(event) => onChange(event)}
			/>
			2 пересадки
		</label>
		<label className={classes.filter__checkbox}>
			<input className={classes["filter__input-checkbox"]}
				id='threeTransfersСheck'
				type="checkbox"
				checked={filterCheckDate.threeTransfersСheck}
				onChange={(event) => onChange(event)}
			/>
			3 пересадки
		</label>
	</div>
)

Filter.defaultProps = {
	filterCheckDate: {
		cheapButton: true,
		fastButton: false,
		allCheck: false,
		withoutTransfersCheck: true,
		oneTransplantСheck: true,
		twoTransplantsСheck: true,
		threeTransfersСheck: false
	},
	onChange: () => {},
};
	
Filter.propTypes = {
	filterCheckDate: PropTypes.objectOf(PropTypes.bool),
	onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
	filterCheckDate: state
})

const mapDispatchToProps = (dispatch) => {
	const { checked } = bindActionCreators(actions, dispatch);
	return ({
		onChange: checked
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);