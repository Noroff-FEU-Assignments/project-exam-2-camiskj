import SearchEstablishments from "../Establishments/Search/SearchEstablishments";
import FeaturedEstablishments from "../Establishments/Featured/FeaturedEstablishments";
import Reviews from "./Reviews/Reviews";

export default function HomePage() {
	return (
		<>
			<header>
				<div className="header__text">
					<p className="header__text-important"><i className="las la-map-marker"></i> Bergen, Norway</p>
					<p className="header__text-description">We help you find the perfect spot to relax in between your adventures</p>
					<SearchEstablishments />
				</div>
			</header>
			<div className="container">
				<FeaturedEstablishments />
			</div>
			<Reviews />
		</>
	);
}