`import { Master } from './layouts'`

module.exports =
	path: '/'
	component: Master
	onEnter: ({ location }, replace) =>

		## Redirects
		queryParams = {}
		location.search
			.replace '?', ''
			.split '&'
			.forEach (query) =>
				params = query.split '='
				queryParams[params[0]] = params[1]

		pageId = queryParams.page_id
		catId = queryParams.cat

		switch pageId
			when '36' then return replace '/contact'
			when '340' then return replace '/pulsen'
			when '691' then return replace '/pulsen'
			when '29' then return replace '/locations'
			when '310' then return replace '/info'
			when '336' then return replace '/info'

		switch catId
			when '7' then return replace '/pictures'
			when '9' then return replace '/pictures'

		if location.pathname == '/'
			return replace '/info'

	childRoutes: [

		## Remove Trailing Slash
		path: '**/'
		onEnter: ({ location }, replace) =>
			replace(location.pathname.slice 0, -1)
	,

		## Routes
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
