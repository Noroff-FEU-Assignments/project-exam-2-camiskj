import { useState } from "react";
import { useForm } from "react-hook-form";
import FormError from "../Common/FormError";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name"),
	email: yup.string().email("Please enter a valid email address").required("Please enter your email"),
	establishment: yup.string().required("You have to select an establishment"),
	fromDate: yup.string().required("You have to enter a from date"),
	toDate: yup.string().required("You have to enter a to date"),
	peopleAdults: yup.string().required("Please select number of adults"),
});

export default function EnquiryInput (props) {
  const [sent, setSent] = useState(false);
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
    establishment: "",
    fromDate: "",
    toDate: "",
    peopleAdults: "",
    peopleChildren: "0",
    message: "",
  })

  const onChange = e => {
    setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
    })
  }

  const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

  async function onSubmit () {
    props.addEnquiryProps(inputText.name, inputText.email, inputText.establishment, inputText.fromDate, inputText.toDate, inputText.peopleAdults, inputText.peopleChildren, inputText.message)
    setInputText({
      name: "",
      email: "",
      establishment: "",
      fromDate: "",
      toDate: "",
      peopleAdults: "",
      peopleChildren: "",
      message: "",
    })

    setSent(true);
  } 

  console.log(errors);

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    {sent && <div className="form-success"><i className="lar la-check-circle"></i> Enquiry is sent</div>}
      <div>
        <label>Your name</label>
        <input
          type="text"
          value={inputText.name}
          name="name"          
          onChange={onChange}
          ref={register}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}
        </div>

        <div>
        <label>Email</label>
        <input
          type="text"
          value={inputText.email}
          name="email"          
          onChange={onChange}
          ref={register}
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
        </div>

        <div>
          <label>I want to stay at</label>
          <select
            name="establishment"
            value={inputText.establishment}
            onChange={onChange}
            ref={register}>
            <option value="">Select establishment</option>
            <option value="Hotel Rainy Day">Hotel Rainy Day</option>
            <option value="Hotel Viewpoint">Hotel Viewpoint</option>
            <option value="Hotel City Centre">Hotel City Centre</option>
            <option value="Hotel Exclusive">Hotel Exclusive</option>
            <option value="The Garden">The Garden</option>
            <option value="Ulriken Bed And Breakfast">Ulriken Bed And Breakfast</option>
          </select>
          {errors.establishment && <FormError>{errors.establishment.message}</FormError>}
				</div>

        <div className="enquiry-form__people">
          <div>
            <label>How many adults</label>
            <select
              name="peopleAdults"
              onChange={onChange}
              ref={register}
              value={inputText.peopleAdults}>
              <option value="">Number of adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {errors.peopleAdults && <FormError>{errors.peopleAdults.message}</FormError>}
          </div>
          <div>
            <label>How many children</label>
            <select name="peopleChildren"
            onChange={onChange}
            ref={register}
            value={inputText.peopleChildren}>
              <option value="">Number of children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div className="enquiry-form__date">
          <div>
            <label>From date</label>
            <input type="date" name="fromDate" onChange={onChange} ref={register}
              value={inputText.fromDate}></input>
              {errors.fromDate && <FormError>{errors.fromDate.message}</FormError>}
          </div>
          <div>
            <label>To date</label>
            <input type="date" name="toDate" onChange={onChange} ref={register}
              value={inputText.toDate}></input>
              {errors.toDate && <FormError>{errors.toDate.message}</FormError>}
          </div>
        </div>

        <div>
        <label>Notes</label>
        <textarea
          value={inputText.message}
          name="message"          
          onChange={onChange}
          placeholder="Any notes you may have regarding your enquiry"
        />
        </div>
      <button>Submit</button>
    </form>
    </div>
  )
}
 