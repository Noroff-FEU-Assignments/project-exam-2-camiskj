import AdminPage from "../AdminPage";
import ListMessages from "../../Contact/MessageFunctions/ListMessages";
import { useEffect } from "react";

export default function Messages() {
	
	useEffect(() => {
		document.title = "Admin messages | Holidaze";
	}, []);

	return (
		<AdminPage>
      <h2>Messages</h2>
			<ListMessages />
		</AdminPage>
	);
}