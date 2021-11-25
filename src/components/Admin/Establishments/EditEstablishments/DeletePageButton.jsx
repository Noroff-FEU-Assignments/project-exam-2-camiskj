import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

export default function DeletePageButton({ id }) {
	const [error, setError] = useState(null);

	const http = useAxios();
	const history = useHistory();

	const url = `/wp/v2/pages/${id}`;

	async function handleDelete() {
		const confirmDelete = window.confirm("Are you sure you want to delete this establishment?");

		if (confirmDelete) {
			try {
				await http.delete(url);
				history.push("/admin");
			} catch (error) {
				setError(error);
			}
		}
	}

	return (
		<button type="button" className="delete" onClick={handleDelete}>
			{error ? "Error" : "Delete"}
		</button>
	);
}

DeletePageButton.propTypes = {
	id: PropTypes.number.isRequired,
};
