import Heading from "../Heading/Heading";
import LoginForm from "./LoginForm";

export default function LoginPage() {
	return (
		<>
			<header />
			<div className="login-form">
				<Heading content="Login" />
				<p>Login to administer content</p>
				<LoginForm />
			</div>
		</>
	);
}
