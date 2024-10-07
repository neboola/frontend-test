import { useEffect, useState } from "react";

export default function Dashboard() {
	const [data, setData] = useState<string | null>(null);

	useEffect(() => {
		const loadLibrary = async () => {
			const { join } = await import("lodash/join");
			const result = join(["Hello", "World"], " ");
			setData(result);
		};

		loadLibrary();
	}, []);

	return <p>{data}</p>;
}
