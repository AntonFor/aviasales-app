import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import classes from './tabs.module.scss';

import * as actions from '../../actions';

const classNameBind = classNamesBind.bind(classes);

const Tabs = ({ sortButtonDate, onClick }) => {
	const classNameCheap = classNameBind('tabs__button', {
		'selected': sortButtonDate[0].selected
	});
	const classNameFast = classNameBind('tabs__button', {
		'selected': sortButtonDate[1].selected
	});
	return (
		<div>
			<button
				id={sortButtonDate[0].id}
				onClick={() => onClick(sortButtonDate[0].id)}
				className={classNameCheap}
				type="button">САМЫЙ ДЕШЕВЫЙ</button>
			<button
				id={sortButtonDate[1].id}
				onClick={() => onClick(sortButtonDate[1].id)}
				className={classNameFast}
				type="button">САМЫЙ БЫСТЫЙ</button>
		</div>
	)
}

Tabs.defaultProps = {
	sortButtonDate: [
		{id: 'cheapButton', selected: false},
		{id: 'fastButton', selected: true},
		{id: 'allCheck', checked: false},
		{id: 'withoutTransfersCheck', checked: true},
		{id: 'oneTransplantСheck', checked: true},
		{id: 'twoTransplantsСheck', checked: true},
		{id: 'threeTransfersСheck', checked: false}
	],
  onClick: () => {},
};

Tabs.propTypes = {
	sortButtonDate: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
	sortButtonDate: state
})

const mapDispatchToProps = (dispatch) => {
	const { select } = bindActionCreators(actions, dispatch);
	return ({
		onClick: select
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);