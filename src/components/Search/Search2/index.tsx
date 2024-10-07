import { useState } from "react";
import throttle from "lodash/throttle";

export default function SearchComponent() {
	const [query, setQuery] = useState("");

	const throttledSearch = throttle(async (searchQuery: string) => {
		await fetch(`/api/search?q=${searchQuery}`);
	}, 600);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value;
		setQuery(newQuery);
		throttledSearch(newQuery);
	};

	return (
		<input
			type="text"
			value={query}
			onChange={handleSearch}
			placeholder="Search..."
		/>
	);
}
