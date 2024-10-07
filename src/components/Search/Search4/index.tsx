import { useState } from "react";

export default function SearchComponent() {
	const [query, setQuery] = useState("");
	const [requestCount, setRequestCount] = useState(0);

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = e.target.value;
		setQuery(newQuery);

		if (requestCount < 100) {
			await fetch(`/api/search?q=${newQuery}`);
			setRequestCount((prev) => prev + 1);
		} else {
			setTimeout(() => setRequestCount(0), 60000);
		}
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
