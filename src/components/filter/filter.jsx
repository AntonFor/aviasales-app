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
					id={filterCheckDate[2].id}
					type="checkbox"
					checked={filterCheckDate[2].checked}
					onChange={() => onChange(filterCheckDate[2].id)}
				/>
				Все
			</label>
			<label className={classes.filter__checkbox}>
				<input className={classes["filter__input-checkbox"]}
					id={filterCheckDate[3].id}
					type="checkbox"
					checked={filterCheckDate[3].checked}
					onChange={() => onChange(filterCheckDate[3].id)}
				/>
				Без пересадок
			</label>
			<label className={classes.filter__checkbox}>
				<input className={classes["filter__input-checkbox"]}
					id={filterCheckDate[4].id}
					type="checkbox"
					checked={filterCheckDate[4].checked}
					onChange={() => onChange(filterCheckDate[4].id)}
				/>
				1 пересадка
			</label>
			<label className={classes.filter__checkbox}>
				<input className={classes["filter__input-checkbox"]}
					id={filterCheckDate[5].id}
					type="checkbox"
					checked={filterCheckDate[5].checked}
					onChange={() => onChange(filterCheckDate[5].id)}
				/>
				2 пересадки
			</label>
			<label className={classes.filter__checkbox}>
				<input className={classes["filter__input-checkbox"]}
					id={filterCheckDate[6].id}
					type="checkbox"
					checked={filterCheckDate[6].checked}
					onChange={() => onChange(filterCheckDate[6].id)}
				/>
				3 пересадки
			</label>
		</div>
	)

Filter.defaultProps = {
	filterCheckDate: [
		{id: 'cheapButton', selected: false},
		{id: 'fastButton', selected: true},
		{id: 'allCheck', checked: false},
		{id: 'withoutTransfersCheck', checked: true},
		{id: 'oneTransplantСheck', checked: true},
		{id: 'twoTransplantsСheck', checked: true},
		{id: 'threeTransfersСheck', checked: false}
	],
	onChange: () => {},
};
	
Filter.propTypes = {
	filterCheckDate: PropTypes.arrayOf(PropTypes.object),
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