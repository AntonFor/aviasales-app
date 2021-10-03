/* eslint-disable eqeqeq */
import server from "./services/server";

export const select = (event) => ( {type: 'SELECT', event} );

export const selectDefoult = () => ( {type: 'SELECT_DEFOULT'} );

export const checked = (event) => ( {type: 'CHECKED', event} );

export const responseSearchId = (body) => ( {type: 'UPDATE_SEARCH_ID', body} );

export const errorSearchId = (error) => ( {type: 'ERROR_SEARCH_ID', error} );

export const searchId = () => (dispatch) => server.getSearchId()
	.then(response => dispatch(responseSearchId(response)))
	.catch(err => dispatch(errorSearchId(err)))

export const responseTickets = (body) => ( {type: 'UPDATE_TICKETS', body} );

export const errorTickets = (error) => ( {type: 'ERROR_TICKETS', error} );

export const tickets = (id) => (dispatch) => server.getTickets(id)
	.then(response => {
		dispatch(responseTickets(response));
		if (!response.stop) dispatch(tickets(id)); 
	})	
	.catch((err) => {
		dispatch(errorTickets(err));
		if (err == 'Error: 500') dispatch(tickets(id));
	})