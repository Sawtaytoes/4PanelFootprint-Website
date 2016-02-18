// Page Meta
export const UPDATE_PAGE_META = 'UPDATE_PAGE_META'

export function updatePageMeta(path) {
	return {
		type: UPDATE_PAGE_META,
		path
	}
}

// Header Nav
export const OPEN_MENU = 'OPEN_MENU'
export const CLOSE_MENU = 'CLOSE_MENU'
export const OPEN_SUBMENU = 'OPEN_SUBMENU'
export const CLOSE_SUBMENU = 'CLOSE_SUBMENU'

export function openMenu() {
	return {
		type: OPEN_MENU,
		menuIsOpen: true
	}
}

export function closeMenu() {
	return {
		type: CLOSE_MENU,
		menuIsOpen: false,
		submenuIsOpen: false
	}
}

export function openSubMenu(submenuId) {
	return {
		type: OPEN_SUBMENU,
		menuIsOpen: true,
		submenuIsOpen: true,
		submenuId
	}
}

export function closeSubMenu() {
	return {
		type: CLOSE_SUBMENU,
		submenuIsOpen: false,
		submenuId: null
	}
}
