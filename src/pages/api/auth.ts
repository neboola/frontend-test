import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse): void => {
	if (req.method === "POST") {
		const token = "my-super-secure-token";

		res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/`);

		return res.status(200).json({ message: "Authenticated" });
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
};
