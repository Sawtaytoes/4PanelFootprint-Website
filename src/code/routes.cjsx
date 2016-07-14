`import { Master } from './layouts'`
`import getSearchQueryParameters from 'utilities/search-query-parameters'`

redirectRoute = (route, nextState, replace) =>
	replace route

module.exports =
	path: '/'
	component: Master
	onEnter: ({ location }, replace) =>

		# Redirects
		queryParameters = getSearchQueryParameters(location.search)

		pageId = queryParameters.page_id
		catId = queryParameters.cat

		if pageId
			switch pageId
				when '36' then replace '/contact'
				when '340' then replace '/pulsen'
				when '691' then replace '/pulsen'
				when '29' then replace '/locations'
				when '310' then replace '/info'
				when '336' then replace '/info'
			return

		if catId
			replace '/pictures'
			return

		switch location.pathname
			when '/' then replace '/info'
			when '/location' then replace '/locations'

	childRoutes: [

		# Routes
		path: 'info'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/info'
	,
		path: 'contact'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/contact'
	,
		path: 'pulsen'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/pulsen'
	,
		path: 'locations'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/locations'
	,
		path: 'pictures'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/pictures'
	,
		path: '*'
		getComponent: (location, cb) =>
			require.ensure [], (require) =>
				cb null, require './views/404'
	]
