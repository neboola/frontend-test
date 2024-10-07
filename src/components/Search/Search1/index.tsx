import { useState } from "react";

export default function SearchComponent() {
	const [query, setQuery] = useState("");
	let timeoutId: NodeJS.Timeout;

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		clearTimeout(timeoutId);

		timeoutId = setTimeout(async () => {
			await fetch(`/api/search?q=${e.target.value}`);
		}, 600);
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
