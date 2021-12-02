import Heading from "../Heading/Heading";
import LoginForm from "./LoginForm";
import { useEffect } from "react";

export default function LoginPage() {

	useEffect(() => {
		document.title = "Login | Holidaze";
	}, []);

	return (
		<>
			<header />
			<div className="loginForm">
				<Heading content="Login" />
				<p>Login to administer content</p>
				<LoginForm />
			</div>
		</>
	);
}
