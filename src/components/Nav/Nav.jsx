import { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useState } from "react";
import logo from "../Images/logo.png";

function Nav() {
	const [auth, setAuth] = useContext(AuthContext);
	const history = useHistory();
	const [open, toggleOpen] = useState(false);

	function logout() {
		setAuth(null);
		history.push("/");
		toggleOpen(!open);
	};

	function toggle() {
	 toggleOpen(!open);
	};

	const active = useLocation();
  const { pathname } = active;
  const location = pathname.split("/");

	return (
		<nav>
			<Link to="/"><img src={logo} alt="Logo" /></Link>
			<p className="title">Holidaze</p>
			<button className="nav__bar" onClick={toggle}>{open ? <i className="las la-times"></i> : <i className="las la-bars"></i>}</button>
			<div className={open ? "" : "closed"}>
				<div className="nav__toggled">
					<Link to="/" onClick={toggle} className={location[1] === "" ? "active" : ""}>Home</Link>
					<Link to="/establishments" onClick={toggle} className={location[1] === "establishments" ? "active" : ""}>Establishments</Link>
					<Link to="/make-enquiry" onClick={toggle} className={location[1] === "make-enquiry" ? "active" : ""}>Make enquiry</Link>
					<Link to="/contact" onClick={toggle} className={location[1] === "contact" ? "active" : ""}>Contact</Link>
					{auth ? (
						<>
							<Link to="/admin" onClick={toggle} className={location[1] === "admin" ? "active" : ""}>Admin</Link> <button onClick={logout}>Log out</button>
						</>
					) : (
						<Link to="/login" onClick={toggle} className={location[1] === "login" ? "active" : ""}>Login</Link>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Nav;

