import React from 'react';

import classes from './tabs.module.scss';

const Tabs = () => {
	return (
		<div>
			<button className={classes["tabs__button"]}>САМЫЙ ДЕШЕВЫЙ</button>
			<button className={classes["tabs__button"]}>САМЫЙ БЫСТЫЙ</button>
		</div>
	)
}

export default Tabs;