import { useState } from "react";

export default function SearchComponent() {
	const [query, setQuery] = useState("");

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		await fetch(`/api/search?q=${e.target.value}`);
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
