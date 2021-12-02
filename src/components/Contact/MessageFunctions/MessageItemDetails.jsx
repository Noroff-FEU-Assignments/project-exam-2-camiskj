import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MessageItemDetails = props => {

  async function handleDelete () {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");

    if (confirmDelete) {
      props.deleteMessageProps(id)
    }
  };

  useEffect(() => {
    return () => {
      // console.log("Updating")
    }
  }, []);

  const { id, name, email, message } = props.message

  return (
    <div className="messages">
      <div className="messages__from"><p className="messageTitle">From</p>{name}</div>
      <div className="messages__email"><p className="messageTitle">E-mail</p>{email}</div>
      <div className="messages__replyOrDelete">
        <Link to="/"><i className="las la-reply"></i></Link>
        <button onClick={handleDelete}><i className="lar la-trash-alt"></i></button>
      </div>
      <div className="messages__textarea"><p className="messageTitle">Message</p>{message}</div>
    </div>
  )
};

export default MessageItemDetails;