import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import collapsibleMenu from 'reducers/collapsible-menu'
import locationChange from 'reducers/location-change'

export default combineReducers({
	collapsibleMenu,
	locationChange,
	routing: routerReducer,
})
