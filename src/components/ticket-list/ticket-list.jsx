/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import classes from './ticket-list.module.scss';

import Ticket from '../ticket';

const TicketList = ({ tickets }) => {
	const [elements, setElements] = useState([]);
	
	useEffect(() => {
		if (Array.isArray(tickets)) {
			setElements(() => {
				const arr = tickets.map((item, i) => {
					if (i < 5) {
						return (
							<li key={item.segments[0].duration}><Ticket /></li>
						);
					} return null;
				})
				return arr;
			})
		}
	}, [tickets]);

	return <ul className={classes.list}>{elements}</ul>;
}

TicketList.defaultProps = {
	tickets: []
}

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (state) => {
	const { tickets } = state;
	return ({
		tickets
	})
}

const mapDispatchToProps = () => {}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);