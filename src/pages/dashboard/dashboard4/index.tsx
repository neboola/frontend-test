import { join } from "lodash";

export default function Dashboard() {
	const data = join(["Hello", "World"], " ");

	return <p>{data}</p>;
}
