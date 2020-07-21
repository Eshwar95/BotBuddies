import {CHANGE_SEARCHFIELD,
		REQUEST_BOTS_PENDING,
		REQUEST_BOTS_SUCCESS,
		REQUEST_BOTS_FAILED } from './constants.js';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCHFIELD,
	payload: text
})

export const requestBots =	() => (dispatch) =>{
	dispatch({ type : REQUEST_BOTS_PENDING });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(data => dispatch({type : REQUEST_BOTS_SUCCESS , payload: data}))
		.catch(error => dispatch({type : REQUEST_BOTS_FAILED, payload : error}));
}