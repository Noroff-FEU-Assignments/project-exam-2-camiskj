import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import AdminPage from "./components/Admin/AdminPage";
import Nav from "./components/Nav/Nav";
import { AuthProvider } from "./context/AuthContext";
import './sass/styles.scss';
import EstablishmentDetails from "./components/Establishments/Details/EstablishmentDetails";
import HomePage from "./components/Home/HomePage";
import ContactForm from "./components/Contact/Contact";
import Establishments from "./components/Establishments/Establishments";
import MakeEnquiry from "./components/MakeEnquiry/MakeEnquiry";
import Footer from "./components/Footer/Footer";
import AddEstablishment from "./components/Admin/Establishments/AddEstablishment/AddEstablishment";
import EditId from "./components/Admin/Establishments/EditEstablishments/EditId";
import Messages from "./components/Admin/Messages/Messages";
import Enquiries from "./components/Admin/Enquiries/Enquiries";

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Nav />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/contact">
							<ContactForm />
						</Route>
						<Route exact path="/establishments">
							<Establishments />
						</Route>
						<Route exact path="/make-enquiry">
							<MakeEnquiry />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/admin" exact>
							<AdminPage />
						</Route>
						<Route path="/admin/add-establishment">
							<AddEstablishment />
						</Route>
						<Route path="/admin/edit-establishments/:id">
							<EditId />
						</Route>
						<Route path="/admin/messages">
							<Messages />
						</Route>
						<Route path="/admin/enquiries">
							<Enquiries />
						</Route>
						<Route path="/establishments/:id">
							<EstablishmentDetails />
						</Route>
						<Route path="*">
							<div>ERROR: Route not found</div>
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
