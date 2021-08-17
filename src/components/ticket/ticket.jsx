import React from 'react';

import classes from './ticket.module.scss';

const Ticket = () => (
		<div className={classes.ticket}>
			<div className={classes.ticket__header}>
				<span className={classes.ticket__price}>13 400 Р</span>
				<div className={classes.ticket__logo} />
			</div>
			<div className={classes.ticket__option}>
				<div className={classes.ticket__route}>
					<span className={classes["details-title"]}>MOW – HKT</span>
					<span className={classes["details-content"]}>10:45 – 08:00</span>
				</div>
				<div className={classes.ticket__lenght}>
					<span className={classes["details-title"]}>В ПУТИ</span>
					<span className={classes["details-content"]}>21ч 15м</span>
				</div>
				<div className={classes.ticket__stops}>
					<span className={classes["details-title"]}>2 ПЕРЕСАДКИ</span>
					<span className={classes["details-content"]}>HKG, JNB</span>
				</div>
			</div>
		</div>
	)

export default Ticket;