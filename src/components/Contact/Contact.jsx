import Heading from "../Heading/Heading";
import AddMessage from "./AddMessage";

export default function Messages() {
	return (
		<div className="container add-space contact-form">
      <Heading content="Contact" />
			<AddMessage />
		</div>
	);
}