import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Input } from "./ui/input";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export function Nav({ searchState }: { searchState: Dispatch<SetStateAction<string>> }) {
	return <Navbar className="p-5 backdrop-blur z-10 sticky" isBordered isBlurred>
		<NavbarBrand>
			<a href="#top"><Image src="/favicon.svg" alt="Logo of books" width={36} height={36} /></a>
		</NavbarBrand>
		<NavbarContent className="sm:flex gap-4 justify-between">
			<NavbarItem>
				<Input type="search" placeholder="Search for a library" onChange={e => searchState(e.target.value)}></Input>
			</NavbarItem>
		</NavbarContent>
	</Navbar>
}