/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bool, PropTypes } from 'prop-types';

import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import Ticket from '../ticket';

import * as actions from '../../actions';

import classes from './app.module.scss';

const App = ({ updateSearchId, id, updateTickets, stopCheck }) => {
	useEffect(() => {
		updateSearchId();
	}, []);

	useEffect(() => {
		updateTickets(id);
	}, [id]);

	useEffect(() => {
		if (!stopCheck) updateTickets(id);
	}, [stopCheck]);
	
	return (
		<div className={classes.app}>
			<Logo />
			<div className={classes.container}>
				<Filter />
				<div>
					<Tabs />
					<div>
						<Ticket />
					</div>
				</div>
			</div>
		</div>
	)
}

App.defaultProps = {
	updateSearchId: () => {},
	id: '',
	updateTickets: () => {},
	stopCheck: false
}

App.propTypes = {
	updateSearchId: PropTypes.func,
	id: PropTypes.string,
	updateTickets: PropTypes.func,
	stopCheck: bool
}

const mapStateToProps = (state) => {
	const { searchId, stop } = state;
	return ({
		id: searchId,
		stopCheck: stop
	})
}

const mapDispatchToProps = (dispatch) => {
	const { searchId, tickets } = bindActionCreators(actions, dispatch);
	return ({
		updateSearchId: searchId,
		updateTickets: tickets
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(App);