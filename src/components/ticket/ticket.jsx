/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './ticket.module.scss';

import { stopsTitle, getHoursTicket, getMinutesTicket, getTimeFromMins } from '../../utilities/utilities';

const Ticket = (props) => {
	const { ticket } = props;
	const { price, carrier, segments } = ticket;

	const stopsThere = segments[0].stops.map((item, i) => {
		if(i === segments[0].stops.length - 1) return <li key={i} className={classes["transfer-list__item"]}>{item}</li>
		return <li key={i} className={classes["transfer-list__item"]}>{item}, </li>
	});

	const stopsBack = segments[1].stops.map((item, i) => {
		if(i === segments[1].stops.length - 1) return <li key={i} className={classes["transfer-list__item"]}>{item}</li>
		return <li key={i} className={classes["transfer-list__item"]}>{item}, </li>
	});
	
	const hoursEndThere = new Date(segments[0].date).getTime() + ((segments[0].duration) * 60 * 1000);
	const minutesEndThere = new Date(segments[0].date).getTime() + ((segments[0].duration) * 60 * 1000);
	const hoursEndBack = new Date(segments[1].date).getTime() + ((segments[1].duration) * 60 * 1000);
	const minutesEndBack = new Date(segments[1].date).getTime() + ((segments[1].duration) * 60 * 1000);

	const imageLogo = {
		backgroundImage: `url(//pics.avs.io/99/36/${carrier}.png)`
	}

	return (
		<div className={classes.ticket}>
			<div className={classes.ticket__header}>
				<span className={classes.ticket__price}>{(price).toLocaleString('ru')} Р</span>
				<div className={classes.ticket__logo} style={imageLogo} />
			</div>
			<div className={classes.ticket__option}>
				<div className={classes.ticket__route}>
					<span className={classes["details-title"]}>{segments[0].origin} – {segments[0].destination}</span>
					<span className={classes["details-content"]}>{getHoursTicket(segments[0].date)}:{getMinutesTicket(segments[0].date)} – {getHoursTicket(hoursEndThere)}:{getMinutesTicket(minutesEndThere)}</span>
				</div>
				<div className={classes.ticket__lenght}>
					<span className={classes["details-title"]}>В ПУТИ</span>
					<span className={classes["details-content"]}>{getTimeFromMins(segments[0].duration)}</span>
				</div>
				<div className={classes.ticket__stops}>
					<span className={classes["details-title"]}>{stopsTitle(segments[0].stops.length)}</span>
					<span className={classes["details-content"]}>
						<ul className={classes["transfer-list"]}>{stopsThere}</ul>
					</span>
				</div>
			</div>
			<div className={classes.ticket__option}>
				<div className={classes.ticket__route}>
					<span className={classes["details-title"]}>{segments[1].origin} – {segments[1].destination}</span>
					<span className={classes["details-content"]}>{getHoursTicket(segments[1].date)}:{getMinutesTicket(segments[1].date)} – {getHoursTicket(hoursEndBack)}:{getMinutesTicket(minutesEndBack)}</span>
				</div>
				<div className={classes.ticket__lenght}>
					<span className={classes["details-title"]}>В ПУТИ</span>
					<span className={classes["details-content"]}>{getTimeFromMins(segments[1].duration)}</span>
				</div>
				<div className={classes.ticket__stops}>
					<span className={classes["details-title"]}>{stopsTitle(segments[1].stops.length)}</span>
					<span className={classes["details-content"]}>
						<ul className={classes["transfer-list"]}>{stopsBack}</ul>
					</span>
				</div>
			</div>
		</div>
	)
}

Ticket.defaultProps = {
	ticket: {}
}

Ticket.propTypes = {
	ticket: PropTypes.shape({
		price: PropTypes.number,
		carrier: PropTypes.string,
		segments: PropTypes.arrayOf(PropTypes.object)
	})
}

export default Ticket;