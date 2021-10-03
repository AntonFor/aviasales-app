/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid'

import classes from './ticket-list.module.scss';

import Ticket from '../ticket';

import * as actions from '../../actions';

const TicketList = ({ tickets, selectDef, stop, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck }) => {
	const [elements, setElements] = useState([]);

	useEffect(() => selectDef(), [stop]);
	
	useEffect(() => {
		setElements(() => {
			const arr = tickets.map((item, i) => {
				if (withoutTransfersCheck) {
					if (item.segments[0].stops.length === 0) return (<li key={uuidv4()}><Ticket ticket={tickets[i]} /></li>)
				}
				if (oneTransplantСheck) {
					if (item.segments[0].stops.length === 1) return (<li key={uuidv4()}><Ticket ticket={tickets[i]} /></li>)
				} 
				if (twoTransplantsСheck) {
					if (item.segments[0].stops.length === 2) return (<li key={uuidv4()}><Ticket ticket={tickets[i]} /></li>)
				} 
				if (threeTransfersСheck) {
					if (item.segments[0].stops.length === 3) return (<li key={uuidv4()}><Ticket ticket={tickets[i]} /></li>)
				}
				return null;
			})
			return arr;
		})
	}, [tickets, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck]);

	return <ul className={classes.list}>{elements}</ul>;
}

TicketList.defaultProps = {
	tickets: [],
	selectDef: () => {},
	stop: false,
	withoutTransfersCheck: false,
	oneTransplantСheck: false,
	twoTransplantsСheck: false,
	threeTransfersСheck: false
}

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object),
	selectDef: PropTypes.func,
	stop: PropTypes.bool,
	withoutTransfersCheck: PropTypes.bool,
	oneTransplantСheck: PropTypes.bool,
	twoTransplantsСheck: PropTypes.bool,
	threeTransfersСheck: PropTypes.bool
}

const mapStateToProps = (state) => {
	const { tickets, stop, withoutTransfersCheck, oneTransplantСheck, twoTransplantsСheck, threeTransfersСheck } = state;
	return ({
		tickets,
		stop,
		withoutTransfersCheck,
		oneTransplantСheck,
		twoTransplantsСheck,
		threeTransfersСheck
	})
}

const mapDispatchToProps = (dispatch) => {
	const { selectDefoult } = bindActionCreators(actions, dispatch);
	return ({
		selectDef: selectDefoult
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);