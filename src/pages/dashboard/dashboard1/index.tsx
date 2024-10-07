import _ from "lodash";

export default function Dashboard() {
	const data = _.join(["Hello", "World"], " ");

	return <p>{data}</p>;
}
