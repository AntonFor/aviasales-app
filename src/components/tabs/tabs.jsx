import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import classNamesBind from 'classnames/bind';
import classes from './tabs.module.scss';

import * as actions from '../../actions';

const classNameBind = classNamesBind.bind(classes);

const Tabs = ({ cheapButton, fastButton, onClick }) => {
	const classNameCheap = classNameBind('tabs__button', {
		'selected': cheapButton
	});
	const classNameFast = classNameBind('tabs__button', {
		'selected': fastButton
	});
	return (
		<div>
			<button
				id='cheapButton'
				onClick={(event) => onClick(event)}
				className={classNameCheap}
				type="button">САМЫЙ ДЕШЕВЫЙ</button>
			<button
				id='fastButton'
				onClick={(event) => onClick(event)}
				className={classNameFast}
				type="button">САМЫЙ БЫСТЫЙ</button>
		</div>
	)
}

Tabs.defaultProps = {
	cheapButton: true,
	fastButton: false,
	onClick: () => {},
};

Tabs.propTypes = {
	cheapButton: PropTypes.bool,
	fastButton: PropTypes.bool,
	onClick: PropTypes.func,
};

const mapStateToProps = (state) => {
	const { cheapButton, fastButton } = state;
	return ({
		cheapButton,
		fastButton
	})
}

const mapDispatchToProps = (dispatch) => {
	const { select } = bindActionCreators(actions, dispatch);
	return ({
		onClick: select
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);