import Heading from "../Heading/Heading";
import AddEnquiry from "./AddEnquiry";

export default function Messages() {
	return (
		<div className="container add-space enquiry-form">
      <Heading content="Make enquiry" />
			<AddEnquiry />
		</div>
	);
}