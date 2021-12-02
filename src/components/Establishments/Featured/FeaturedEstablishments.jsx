import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";
import { filter } from "lodash";

export default function FeaturedEstablishments() {
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

	if (error) return <div>{}</div>;

	const filteredPages = filter(pages, ['featured', "true"]);

	return (
		<>
			<h2>Featured establishments</h2>
			<div className="featured">
				{filteredPages.map((media)=>
				<div key={media.id}>
					<Link to={`establishments/${media.id}`}>
						<img src={media.x_featured_media_original} alt={media.title.rendered} />
						<h3>{media.title.rendered}</h3>
					</Link>
				</div>
				)}
				<div className="featured__all">
					<Link to="/establishments"><i className="las la-angle-double-right"></i>See all</Link>
				</div>
			</div>
		</>
	);
}
