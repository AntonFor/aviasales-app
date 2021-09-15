/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

import Logo from '../logo';
import Filter from '../filter';
import Tabs from '../tabs';
import Ticket from '../ticket';

import * as actions from '../../actions';

import classes from './app.module.scss';

const App = ({ searchId, updateSearchId }) => {
	useEffect(() => {
		updateSearchId();
	}, []);

	console.log(searchId);
	
	return (
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
}

App.defaultProps = {
	searchId: {},
	updateSearchId: () => {}
}

App.propTypes = {
	searchId: PropTypes.objectOf(PropTypes.object),
	updateSearchId: PropTypes.func,
}

const mapStateToProps = (state) => ({
		searchId: state.searchId
})

const mapDispatchToProps = (dispatch) => {
	const { searchId } = bindActionCreators(actions, dispatch);
	return ({
		updateSearchId: searchId
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(App);