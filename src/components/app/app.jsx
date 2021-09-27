/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import TicketList from '../ticket-list';

import * as actions from '../../actions';

// import { updateTicketsRepet } from '../../utilities/utilities';

import classes from './app.module.scss';

const App = ({ updateSearchId, id, updateTickets, stopCheck }) => {
	const check = useRef(stopCheck);

	const updateTicketsRepet = (searchId, stop) => {
		let acc = 0;
		while (acc < 30) {
			acc+=1;
			if (stop) break;
			if (searchId !== null) updateTickets(searchId);
		}
	}
	
	useEffect(() => {
		updateSearchId();
	}, []);
	
	useEffect(() => {
		check.current = stopCheck;
		updateTickets(id);
		updateTicketsRepet(id, check.current);
	}, [id, stopCheck]);
	
	return (
		<div className={classes.app}>
			<Logo />
			<div className={classes.container}>
				<Filter />
				<div>
					<Tabs />
					<div>
						<TicketList />
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
	stopCheck: PropTypes.bool
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