import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import AdminMenu from "./AdminMenu";
import EstablishmentList from "./Establishments/EstablishmentList";

export default function AdminPage({ children }) {
	return (
		<div className="container add-space">
			<Heading content="Admin" />
			<AdminMenu />
			{children ? children : <EstablishmentList />}
		</div>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};
