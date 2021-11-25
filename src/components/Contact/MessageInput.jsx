import { useState } from "react";
import { useForm } from "react-hook-form";
import FormError from "../Common/FormError";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
	name: yup.string().required("Please enter your name"),
	email: yup.string().email("Please enter a valid email address").required("Please enter your email"),
  message: yup.string().required("You need to write a message").max(20),
});

export default function MessageInput (props) {
  const [sent, setSent] = useState(false);
  const [inputText, setInputText] = useState({
    name: "",
    email: "",
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
      props.addTodoProps(inputText.name, inputText.email, inputText.message)
      setInputText({
        name: "",
        email: "",
        message: "",
    })

    setSent(true);
  }

  console.log(errors);

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
    {sent && <div className="form-success"><i className="lar la-check-circle"></i> Message is sent</div>}
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
        <label>Message</label>
        <textarea
          value={inputText.message}
          name="message"          
          onChange={onChange}
          ref={register}
        />
        {errors.message && <FormError>{errors.message.message}</FormError>}
        </div>
      <button>Submit</button>
    </form>
    </div>
  )
}

 