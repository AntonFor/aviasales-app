import React from 'react';

import classes from './tabs.module.scss';

const Tabs = () => (
		<div>
			<button className={classes.tabs__button} type="button">САМЫЙ ДЕШЕВЫЙ</button>
			<button className={classes.tabs__button} type="button">САМЫЙ БЫСТЫЙ</button>
		</div>
	)

export default Tabs;