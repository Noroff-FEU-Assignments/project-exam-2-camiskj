import { Link } from "react-router-dom";

export default function AdminMenu() {
	return (
		<div className="adminMenu">
			<Link to="/admin" className="adminMenu__button">Establishments</Link>
			<Link to="/admin/enquiries" className="adminMenu__button">Enquiries</Link>
			<Link to="/admin/messages" className="adminMenu__button">Messages</Link>
		</div>
	);
}
