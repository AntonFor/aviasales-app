/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import { Progress } from 'antd';

import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import TicketList from '../ticket-list';
import Message from '../message';

import * as actions from '../../actions';

import classes from './app.module.scss';

const App = ({ updateSearchId, id, updateTickets, stop, tickets, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck }) => {
	const [percent, setPercent] = useState(0);
	
	useEffect(() => {
		updateSearchId();
	}, []);
	
	useEffect(() => {
		updateTickets(id);
	}, [id]);

	useEffect(() => {
		setPercent(() => (100*tickets.length/10000));
	}, [tickets]);

	const progress = stop ? null : <Progress percent={percent} showInfo={false} strokeColor='#2196F3' />
	const message = (!withoutTransfersCheck && !oneTransplantСheck && !twoTransplantsСheck && !threeTransfersСheck) ? 
		<Message /> : null
	
	return (
		<div className={classes.app}>
			<Logo />
			<div className={classes.container}>
				<Filter />
				<div>
					<Tabs />
					<div>
						{message}
						{progress}
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
	stop: false,
	tickets: [],
	withoutTransfersCheck: false,
	oneTransplantСheck: false,
	twoTransplantsСheck: false,
	threeTransfersСheck: false
}

App.propTypes = {
	updateSearchId: PropTypes.func,
	id: PropTypes.string,
	updateTickets: PropTypes.func,
	stop: PropTypes.bool,
	tickets: PropTypes.arrayOf(PropTypes.object),
	withoutTransfersCheck: PropTypes.bool,
	oneTransplantСheck: PropTypes.bool,
	twoTransplantsСheck: PropTypes.bool,
	threeTransfersСheck: PropTypes.bool
}

const mapStateToProps = (state) => {
	const { searchId, stop, tickets, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck } = state;
	return ({
		id: searchId,
		stop,
		tickets,
		withoutTransfersCheck,
		oneTransplantСheck,
		twoTransplantsСheck,
		threeTransfersСheck
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