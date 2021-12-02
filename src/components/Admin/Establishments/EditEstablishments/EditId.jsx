import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../Common/FormError";
import useAxios from "../../../../hooks/useAxios";
import DeletePageButton from "./DeletePageButton";
import MediaDropdown from "../Media/MediaDropdown";
import AdminPage from "../../AdminPage";

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function EditId() {
	const [page, setPage] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPage, setFetchingPage] = useState(true);
	const [updatingPage, setUpdatingPage] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	const http = useAxios();
	let { id } = useParams();
	const url = `wp/v2/pages/${id}`;

	useEffect(
		function () {
			async function getPage() {
				try {
					const response = await http.get(url);
					// console.log("response", response.data);
					setPage(response.data);
				} catch (error) {
					// console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPage(false);
				}
			}

			getPage();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	async function onSubmit(data) {
		setUpdatingPage(true);
		setUpdateError(null);
		setUpdated(false);

		if (data.featured_media === "") {
			data.featured_media = null;
		}

		// console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			setUpdated(true);
		} catch (error) {
			// console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPage(false);
		}
	}

	if (fetchingPage) return <div>Loading...</div>;

	if (fetchError) return <div>Error loading post</div>;

	return (
		<AdminPage>
			<h2>Edit establishment</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="adminForm">
				{updated && <div className="formSuccess"><i className="lar la-check-circle"></i> The establishment has been updated</div>}
				{updateError && <FormError>{updateError}</FormError>}

				<fieldset disabled={updatingPage}>
					<div>
						<input name="title" defaultValue={page.title.rendered} placeholder="Title" ref={register} />
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</div>

					<div>
						<textarea name="content" defaultValue={page.content.rendered} placeholder="Content" ref={register} />
					</div>

					<div>
						<MediaDropdown register={register} />
						<p><i className="las la-exclamation-circle"></i> Not selecting a media will leave the establishment without a featured image</p>
					</div>

					<button>Update</button>
					<DeletePageButton id={page.id} />
				</fieldset>
			</form>
		</AdminPage>
	);
}