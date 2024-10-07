import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
	const [status, setStatus] = useState<string | null>(null);
	const router = useRouter();

	const handleLogin = async (): Promise<void> => {
		const response = await fetch("/api/auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: "user", password: "pass" }),
		});

		if (response.ok) {
			setStatus("Authenticated and token stored in HttpOnly Cookie");
			router.push("/dashboard");
		} else {
			setStatus("Authentication failed");
		}
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<p>{status}</p>
		</div>
	);
}
