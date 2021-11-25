import AdminPage from "../AdminPage";
import ListMessages from "../../Contact/ListMessages";

export default function Messages() {
	return (
		<AdminPage>
      <h2>Messages</h2>
			<ListMessages />
		</AdminPage>
	);
}