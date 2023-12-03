import { Library, LinkableString, Status, version } from "~/helpers";
import { TableCell, TableRow } from "./ui/table";

const data = [
	"slashCommands",
	"buttons",
	"selectMenus",
	"threads",
	"guildStickers",
	"contextMenus",
	"autocomplete",
	"scheduledEvents",
	"timeouts",
	"modals",
	"permsv2",
	"automod",
	"localization",
	"forums",
	"appSubscriptions",
] as const

function VersionCell({ ver }: { ver: version }) {
	return <TableCell className={`text-base ${typeof ver === 'number' ? ver <= 7 ? 'text-red-600' : ver >= 9 ? 'text-green-600' : 'text-amber-700' : !ver ? 'text-inherit' : ver[1] >= 8 ? 'text-amber-700' : 'text-red-600' }`}>{typeof ver === 'number' ? ver : !ver ? '-' : `${ver[0]} stable, ${ver[1]} dev`}</TableCell>
}

const LinkableStringColor = {
	[Status.Yes]: 'text-green-600',
	[Status.No]: 'text-red-600',
	[Status.InDev]: 'text-amber-700',
	[Status.Partial]: 'text-amber-700',
	[Status.PartialDev]: 'text-amber-700',
	[Status.PR]: 'text-amber-700',
	['undefined']: '-'
}

const LinkableStringText = {
	[Status.Yes]: 'Yes',
	[Status.No]: 'No',
	[Status.InDev]: 'Dev Version',
	[Status.Partial]: 'Partial',
	[Status.PartialDev]: 'Partial (Dev Version)',
	[Status.PR]: 'Has a PR',
	['undefined']: '-'
}

function LinkableStringCell({ link }: { link: LinkableString | undefined }) {
	return <TableCell className={`text-base ${typeof link === 'number' ? LinkableStringColor[link] : !link ? 'text-inherit' : LinkableStringColor[link[0] ?? 'undefined']}`}>{typeof link === 'number' ? LinkableStringText[link] : !link ? '-' : <a href={link[1]} className="underline underline-offset-4">{LinkableStringText[link[0] ?? 'undefined']}</a>}</TableCell>
}

export function LibraryRow({ library }: { library: Library }) {
	return <TableRow key={library.name}>
		<TableCell className='font-bold text-base'><a href={library.url}>{library.name}</a></TableCell>
		<VersionCell ver={library.apiVer} />
		<VersionCell ver={library.gwVer} />
		{/* <TableCell className='text-lg'><a href={library.url}>{library.name}</a></TableCell> */}
		{data.map(name => <LinkableStringCell link={library[name]} key={name}/>)}
	</TableRow>
}