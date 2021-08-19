import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import classNames from 'classnames';
import classes from './tabs.module.scss';

import * as actions from '../../actions';

const Tabs = ({ onClickCheap, onClickFast }) =>
	(
		<div>
			<button
				onClick={onClickCheap}
				className={classNames(classes.tabs__button, classes.selected)}
				type="button">САМЫЙ ДЕШЕВЫЙ</button>
			<button
				onClick={onClickFast}
				className={classes.tabs__button}
				type="button">САМЫЙ БЫСТЫЙ</button>
		</div>
	)


Tabs.defaultProps = {
  onClickCheap: () => {},
  onClickFast: () => {},
};

Tabs.propTypes = {
  onClickCheap: PropTypes.func,
  onClickFast: PropTypes.func,
};

const mapStateToProps = (state) => ({
		sortButtonDate: state
	})

const mapDispatchToProps = (dispatch) => {
	const { selectCheap, selectFast } = bindActionCreators(actions, dispatch);
	return ({
		onClickCheap: selectCheap,
		onClickFast: selectFast
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);