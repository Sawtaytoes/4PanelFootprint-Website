import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import collapsibleMenu from './collapsible-menu'
import locationChange from './location-change'

export default combineReducers({
	collapsibleMenu,
	locationChange,
	routing: routeReducer
})
