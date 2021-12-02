import Heading from "../Heading/Heading";
import AddMessage from "./MessageFunctions/AddMessage";
import { useEffect } from "react";

export default function Messages() {

	useEffect(() => {
		document.title = "Contact us | Holidaze";
	}, []);

	return (
		<div className="container addSpace contactForm">
      <Heading content="Contact" />
			<AddMessage />
		</div>
	);
}