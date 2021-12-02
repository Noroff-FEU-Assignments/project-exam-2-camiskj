import AdminPage from "../AdminPage";
import ListEnquiries from "../../MakeEnquiry/EnquiryFunctions/ListEnquiries";
import { useEffect } from "react";

export default function Enquiries() {
	useEffect(() => {
		document.title = "Admin enquiries | Holidaze";
	}, []);

	return (
		<AdminPage>
      <h2>Enquiries</h2>
			<ListEnquiries />
		</AdminPage>
	);
}