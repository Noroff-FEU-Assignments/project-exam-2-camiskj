import Heading from "../Heading/Heading";
import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

export default function Establishments() {
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

	useEffect(() => {
		document.title = "Establishments | Holidaze";
	}, []);

	if (loading) return <div>Loading...</div>;

	if (error) return <div>{}</div>;

	return (
		<div className="container addSpace">
			<Heading content="Establishments" />
      <div className="establishments">
				{pages.map((media)=>
				<div key={media.id}>
					<Link to={`establishments/${media.id}`}>
						<img src={media.x_featured_media_original} alt={media.title.rendered} />
						<h3>{media.title.rendered}</h3>
					</Link>
				</div>
				)}
			</div>
		</div>
	);
}