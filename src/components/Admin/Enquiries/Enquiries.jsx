import AdminPage from "../AdminPage";
import ListEnquiries from "../../MakeEnquiry/ListEnquiries";

export default function Enquiries() {
	return (
		<AdminPage>
      <h2>Enquiries</h2>
			<ListEnquiries />
		</AdminPage>
	);
}