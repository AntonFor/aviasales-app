import server from "./services/server";

export const select = (event) => ( {type: 'SELECT', event} );

export const checked = (event) => ( {type: 'CHECKED', event} );

export const responseSearchId = (body) => ( {type: 'UPDATE_SEARCH_ID', body} );

export const errorSearchId = (error) => ( {type: 'ERROR_SEARCH_ID', error} );

export const searchId = () => (dispatch) => {
	server.getResource()
		.then(response => dispatch(responseSearchId(response)))
		.catch(err => dispatch(errorSearchId(err)))
}
