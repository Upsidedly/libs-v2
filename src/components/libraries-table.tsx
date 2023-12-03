import { Library } from "~/helpers";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";
import { features } from "~/helpers";

export function LibrariesTable({ children }: { children: any }) {
	return <Table>
		<TableHeader>
			<TableRow>
				{features.map(feature => <TableHead className="font-semibold text-sm" key={feature}>{feature}</TableHead>)}
			</TableRow>
		</TableHeader>
		<TableBody>
			{children}
		</TableBody>
	</Table>
}