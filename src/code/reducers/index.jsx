import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import collapsibleMenu from './collapsible-menu'
import locationChange from './location-change'
import metaUpdate from './meta-update'

export default combineReducers({
	collapsibleMenu,
	locationChange,
	metaUpdate,
	routing: routeReducer
})
