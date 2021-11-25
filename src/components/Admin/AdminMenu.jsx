import { Link } from "react-router-dom";

export default function AdminMenu() {
	return (
		<div className="admin-menu">
			<Link to="/admin" className="admin-button">Establishments</Link>
			<Link to="/admin/enquiries" className="admin-button">Enquiries</Link>
			<Link to="/admin/messages" className="admin-button">Messages</Link>
		</div>
	);
}
