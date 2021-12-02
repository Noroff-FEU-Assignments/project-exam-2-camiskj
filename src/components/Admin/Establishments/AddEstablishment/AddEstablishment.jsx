import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../Common/FormError";
import useAxios from "../../../../hooks/useAxios";
import AdminPage from "../../AdminPage";
import MediaDropdown from "../Media/MediaDropdown";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function AddEstablishment() {
	const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
	const http = useAxios();

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		// console.log(data);

		try {
			const response = await http.post("/wp/v2/pages", data);
			console.log("response", response.data);
			history.push("/admin");
		} catch (error) {
			// console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}

	useEffect(() => {
		document.title = "Add establishment | Holidaze";
	}, []);

	return (
		<AdminPage>
			<h2>Add establishment</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="adminForm">
				{serverError && <FormError>{serverError}</FormError>}
				<fieldset disabled={submitting}>
					<div>
						<input name="title" placeholder="Title" ref={register} />
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</div>

					<div>
						<textarea name="content" placeholder="Content" ref={register}>
							&lt;p class="description"&gt;Description&lt;/p&gt;
							&lt;p class="location"&gt;&lt;i class="las la-map-marker"&gt;&lt;/i&gt;Location&lt;/p&gt;
							&lt;p class="facilities__headline"&gt;Facilities&lt;/p&gt;
							&lt;ul class="facilities"&gt;
							&lt;li&gt;Facility&lt;/li&gt;
							&lt;/ul&gt;
							&lt;p class="price"&gt;&lt;span&gt;From&lt;/span&gt; Price&lt;/p&gt;
						</textarea>
					</div>

					<div>
						<MediaDropdown register={register} />
					</div>

					<button>{submitting ? "Submitting..." : "Submit"}</button>
				</fieldset>
			</form>
		</AdminPage>
	);
}
