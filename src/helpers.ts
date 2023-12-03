export type version = 6 | 7 | 8 | 9 | 10 | null | [number, number]
export type LinkableString = Status | [Status.PR | Status.InDev, string]

export const enum Status {
	Yes,
	No,
	Partial,
	InDev,
	PartialDev,
	PR
}

export interface Library {
	name: string
	url: string
	language: string
	apiVer: version
	gwVer: version
	slashCommands: LinkableString
	buttons: LinkableString
	selectMenus: LinkableString
	threads: LinkableString
	guildStickers: LinkableString
	contextMenus: LinkableString
	autocomplete: LinkableString
	scheduledEvents: LinkableString
	timeouts: LinkableString
	modals: LinkableString
	permsv2: LinkableString
	automod: LinkableString
	localization: LinkableString
	forums: LinkableString,
	appSubscriptions?: LinkableString
}

export const features = ['Library', 'API Version', 'Gateway Version', 'Sash Commands', 'Buttons', 'Select Menus', 'Threads', 'Guild Stickers', 'Context Menus', 'Autocomplete', 'Scheduled Events', 'Timeouts', 'Modals', 'Perms v2', 'AutoMod', 'Localization', 'Forums', 'App Subscriptions']