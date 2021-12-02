import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import AdminMenu from "./AdminMenu";
import EstablishmentList from "./Establishments/EstablishmentList";
import { useEffect } from "react";

export default function AdminPage({ children }) {

	useEffect(() => {
		document.title = "Admin establishments | Holidaze";
	}, []);

	return (
		<div className="container addSpace">
			<Heading content="Admin" />
			<AdminMenu />
			{children ? children : <EstablishmentList />}
		</div>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};
