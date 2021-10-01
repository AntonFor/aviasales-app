import React from 'react';
import PropTypes from 'prop-types';

import classes from './ticket.module.scss';

import { stopsTitle, getHoursTicket, getMinutesTicket } from '../../utilities/utilities';

const Ticket = (props) => {
	const { ticket } = props;

	const stopsThere = ticket.segments[0].stops.map((item, i) => {
		if(i === ticket.segments[0].stops.length - 1) return <li key={item} className={classes["transfer-list__item"]}>{item}</li>
		return <li key={item} className={classes["transfer-list__item"]}>{item}, </li>
	});

	const stopsBack = ticket.segments[1].stops.map((item, i) => {
		if(i === ticket.segments[1].stops.length - 1) return <li key={item} className={classes["transfer-list__item"]}>{item}</li>
		return <li key={item} className={classes["transfer-list__item"]}>{item}, </li>
	});

	const hoursEndThere = new Date(ticket.segments[0].date).getTime() + (ticket.segments[0].duration)*60*1000 + 10800000;
	const minutesEndThere = new Date(ticket.segments[0].date).getTime() + (ticket.segments[0].duration)*60*1000 + 10800000;
	const hoursEndBack = new Date(ticket.segments[1].date).getTime() + (ticket.segments[1].duration)*60*1000 + 10800000;
	const minutesEndBack = new Date(ticket.segments[1].date).getTime() + (ticket.segments[1].duration)*60*1000 + 10800000;

	const imageLogo = {
		backgroundImage: `url(//pics.avs.io/99/36/${ticket.carrier}.png)`
	}

	return (
		<div className={classes.ticket}>
			<div className={classes.ticket__header}>
				<span className={classes.ticket__price}>{(ticket.price).toLocaleString('ru')} Р</span>
				<div className={classes.ticket__logo} style={imageLogo} />
			</div>
			<div className={classes.ticket__option}>
				<div className={classes.ticket__route}>
					<span className={classes["details-title"]}>{ticket.segments[0].origin} – {ticket.segments[0].destination}</span>
					<span className={classes["details-content"]}>{getHoursTicket(ticket.segments[0].date)}:{getMinutesTicket(ticket.segments[0].date)} – {getHoursTicket(hoursEndThere)}:{getMinutesTicket(minutesEndThere)}</span>
				</div>
				<div className={classes.ticket__lenght}>
					<span className={classes["details-title"]}>В ПУТИ</span>
					<span className={classes["details-content"]}>{getHoursTicket(ticket.segments[0].duration*60*1000)}ч {getMinutesTicket(ticket.segments[0].duration*60*1000)}м</span>
				</div>
				<div className={classes.ticket__stops}>
					<span className={classes["details-title"]}>{stopsTitle(ticket.segments[0].stops.length)}</span>
					<span className={classes["details-content"]}>
						<ul className={classes["transfer-list"]}>{stopsThere}</ul>
					</span>
				</div>
			</div>
			<div className={classes.ticket__option}>
				<div className={classes.ticket__route}>
					<span className={classes["details-title"]}>{ticket.segments[1].origin} – {ticket.segments[1].destination}</span>
					<span className={classes["details-content"]}>{getHoursTicket(ticket.segments[1].date)}:{getMinutesTicket(ticket.segments[1].date)} – {getHoursTicket(hoursEndBack)}:{getMinutesTicket(minutesEndBack)}</span>
				</div>
				<div className={classes.ticket__lenght}>
					<span className={classes["details-title"]}>В ПУТИ</span>
					<span className={classes["details-content"]}>{getHoursTicket(ticket.segments[1].duration*60*1000)}ч {getMinutesTicket(ticket.segments[1].duration*60*1000)}м</span>
				</div>
				<div className={classes.ticket__stops}>
					<span className={classes["details-title"]}>{stopsTitle(ticket.segments[1].stops.length)}</span>
					<span className={classes["details-content"]}>
						<ul className={classes["transfer-list"]}>{stopsBack}</ul>
					</span>
				</div>
			</div>
		</div>
	)
}

Ticket.defaultProps = {
	ticket: []
}

Ticket.propTypes = {
	ticket: PropTypes.arrayOf(PropTypes.object)
}

export default Ticket;