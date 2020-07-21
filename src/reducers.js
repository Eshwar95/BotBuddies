import {CHANGE_SEARCHFIELD,
		REQUEST_BOTS_PENDING,
		REQUEST_BOTS_SUCCESS,
		REQUEST_BOTS_FAILED } from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state = initialStateSearch , action = {}) => {
	switch(action.type) {
		case CHANGE_SEARCHFIELD:
			return Object.assign({}, state, {searchField: action.payload });
		default: 
			return state;
	}
}

const initialStateBots = {
	isPending: false,
	robots: [],
	error: ''	
}

export const requestBots = (state = initialStateBots, action = {}) => {
	switch(action.type) {
		case REQUEST_BOTS_PENDING :
			return Object.assign({}, state, {isPending: true});
		case REQUEST_BOTS_SUCCESS:
			return Object.assign({}, state, {robots: action.payload,  isPending: false});
		case REQUEST_BOTS_FAILED:
			return Object.assign({}, state, { error: action.payload ,isPending: false});
		default:
			return state;
	}
}
