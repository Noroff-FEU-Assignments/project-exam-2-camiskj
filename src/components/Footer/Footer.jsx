import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Footer() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		<footer>
			<div className="footer__nav">
				<Link to="/">Home</Link>
				<Link to="/establishments">Establishments</Link>
				<Link to="/make-enquiry">Make enquiry</Link>
				<Link to="/contact">Contact</Link>
				{auth ? (
					<>
						<Link to="/admin">Admin</Link> <button onClick={logout}>Log out</button>
					</>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
			<div className="footer__address">
				<p>Holidaze A/S</p>
				<p>Bergen Centrum</p>
				<p>Way of Rain 22</p>
				<p>2000 Bergen</p>
			</div>
			<div className="footer__socialmedia">
				<p><Link to="/"><i className="lab la-instagram"></i> Follow us on Instagram</Link></p>
				<p><Link to="/"><i className="lab la-facebook"></i> Follow us on Facebook</Link></p>
				<p><Link to="/"><i className="lab la-twitter"></i> Follow us on Twitter</Link></p>
			</div>
			<p className="footer_copy">Copyright &copy; 2021</p>
		</footer>
	);
}