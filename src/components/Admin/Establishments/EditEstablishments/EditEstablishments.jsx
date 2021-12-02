import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";

export default function EditEstablishments() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/pages");
				// console.log("response", response);
				setPages(response.data);
			} catch (error) {
				// console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}

		getMedia();
		// eslint-disable-next-line
	}, []);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>Error: could not display establishments</div>;

	return (
		<ul className="editEstablishments">
			{pages.map((media) => {
				return (
					<li key={media.id}>
						<Link to={`/admin/edit-establishments/${media.id}`}>{media.title.rendered}</Link>
					</li>
				);
			})}
		</ul>
	);
}
