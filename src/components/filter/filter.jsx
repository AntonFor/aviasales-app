import React from 'react';

import classes from './filter.module.scss';

const Filter = () => {
	return (
		<div className={classes.filter}>
			<p className={classes["filter__title"]}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
			<label className={classes["filter__checkbox"]}>
				<input className={classes["filter__input-checkbox"]} type="checkbox"/>
				Все
			</label>
			<label className={classes["filter__checkbox"]}>
				<input className={classes["filter__input-checkbox"]} type="checkbox"/>
				Без пересадок
			</label>
			<label className={classes["filter__checkbox"]}>
				<input className={classes["filter__input-checkbox"]} type="checkbox"/>
				1 пересадка
			</label>
			<label className={classes["filter__checkbox"]}>
				<input className={classes["filter__input-checkbox"]} type="checkbox"/>
				2 пересадки
			</label>
			<label className={classes["filter__checkbox"]}>
				<input className={classes["filter__input-checkbox"]} type="checkbox"/>
				3 пересадки
			</label>
		</div>
	)
}

export default Filter;