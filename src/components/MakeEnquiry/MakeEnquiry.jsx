import Heading from "../Heading/Heading";
import AddEnquiry from "./EnquiryFunctions/AddEnquiry";
import { useEffect } from "react";

export default function Messages() {

	useEffect(() => {
		document.title = "Make an enquiry | Holidaze";
	}, []);

	return (
		<div className="container addSpace enquiryForm">
      <Heading content="Make enquiry" />
			<AddEnquiry />
		</div>
	);
}