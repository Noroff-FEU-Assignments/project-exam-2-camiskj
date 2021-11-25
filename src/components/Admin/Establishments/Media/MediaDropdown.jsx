import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useAxios from "../../../../hooks/useAxios";

export default function MediaDropdown({ register }) {
	const [media, setMedia] = useState([]);

	const http = useAxios();

	useEffect(function () {
		async function getMedia() {
			try {
				const response = await http.get("wp/v2/media?per_page=20");
				console.log("response", response);
				setMedia(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getMedia();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<select name="featured_media" size="5" ref={register}>
			<option value="">Select media</option>
			{media.map((media) => {
				return (
					<option key={media.id} value={media.id}>
						{media.alt_text}
					</option>
				);
			})}
		</select>
	);
}

MediaDropdown.propTypes = {
	register: PropTypes.func,
};

MediaDropdown.defaultProps = {
	register: () => {},
};
