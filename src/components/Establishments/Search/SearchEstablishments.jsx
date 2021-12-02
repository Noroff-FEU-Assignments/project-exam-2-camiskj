import { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";

export default function SearchEstablishments() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [input, setInput] = useState('');
	const [results, setResults] = useState([]);

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

	const onChangeHandler = (input)=>{
		let matches = []
		if (input.length > 0) {
			matches = pages.filter(page => {
				const regex = new RegExp(`${input}`, "gi");
				return page.title.rendered.match(regex)
			})
		}
		// console.log('matches', matches)
		setResults(matches)
		setInput(input)
	}

	return (
		<div className="search">
			<div>
        <input
					type="text"
					placeholder="Search establishments..."
					onChange={e=>onChangeHandler(e.target.value)}
					value={input}
					onBlur={()=> {
						setTimeout(() => {
							setResults([])
							setInput([])
						}, 100);
					}}
					/>
			</div>
			{results && results.map((result,id)=>
			<Link to={`/establishments/${result.id}`}>
				<div key={id} className="search__results">
					{result.title.rendered}
				</div>
			</Link>
			)}
		</div>
	);
}
