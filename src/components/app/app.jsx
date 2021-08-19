import React from 'react';

import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import Ticket from '../ticket';

import classes from './app.module.scss';

const App = () => (
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

export default App;