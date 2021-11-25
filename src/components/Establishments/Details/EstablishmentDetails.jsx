import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Carousel from "react-bootstrap/Carousel";

export default function EditPage() {
	const [page, setPage] = useState(null);
	const [fetchingPage, setFetchingPage] = useState(true);
	const [fetchError, setFetchError] = useState(null);

	let { id } = useParams();

	const url = `wp/v2/pages/${id}`;

	const http = useAxios();

	useEffect(
		function () {
			async function getPage() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPage(response.data);
				} catch (error) {
					console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPage(false);
				}
			}

			getPage();
			// eslint-disable-next-line
		},
		[]
	);

	if (fetchingPage) return <div>Loading...</div>;

	if (fetchError) return <div>Error loading page</div>;

	function createContent() {
    return { __html: page.content.rendered };
  }

	return (
		<div className="container add-space">
			<h1>{page.title.rendered}</h1>
			<Link to="/make-enquiry" className="booking-button">Book now</Link>
			<div className="content">
				<div dangerouslySetInnerHTML={createContent()} className="content__fetch"/>
			</div>
			<div className="carousel-hotelimg">
				<Carousel interval={null} variant="light" nextIcon={<i className="las la-angle-right"></i>} prevIcon={<i className="las la-angle-left"></i>}>
				<Carousel.Item>
					<img src={page.x_featured_media_original} alt={page.title.rendered}/>
					<Carousel.Caption>
						<p>{page.title.rendered}</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
				<img src={page.img1.guid} alt={page.img1.post_title} />
					<Carousel.Caption>
						<p>{page.img1.post_title}</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img src={page.img2.guid} alt={page.img2.post_title} />
					<Carousel.Caption>
						<p>{page.img2.post_title}</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			</div>
		</div>
	);
}
