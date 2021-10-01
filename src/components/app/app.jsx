/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import TicketList from '../ticket-list';

import * as actions from '../../actions';

import classes from './app.module.scss';

const App = ({ updateSearchId, id, updateTickets }) => {
	useEffect(() => {
		updateSearchId();
	}, []);
	
	useEffect(() => {
		updateTickets(id);
	}, [id]);
	
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
	updateTickets: () => {}
}

App.propTypes = {
	updateSearchId: PropTypes.func,
	id: PropTypes.string,
	updateTickets: PropTypes.func
}

const mapStateToProps = (state) => {
	const { searchId } = state;
	return ({
		id: searchId
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