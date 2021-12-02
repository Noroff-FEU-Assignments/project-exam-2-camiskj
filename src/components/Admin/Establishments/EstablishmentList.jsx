import { Link } from "react-router-dom";
import EditEstablishments from "./EditEstablishments/EditEstablishments";

export default function EstablishmentList() {
	return (
		<>
			<h2>Edit establishments</h2>
			<EditEstablishments />
      <p>
				<Link to="/admin/add-establishment" className="adminMenu__button">Add new establishment</Link>
			</p>
		</>
	);
}