import React, { useEffect } from "react"

const MessageItemDetails = props => {

  async function handleDelete () {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");

    if (confirmDelete) {
      props.deleteMessageProps(id)
    }
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const { id, name, email, message } = props.message

    return (
      <div className="messages">
        <div className="messages__from"><p className="messages__title">From</p>{name}</div>
        <div className="messages__email"><p className="messages__title">E-mail</p>{email}</div>
        <div className="messages__delete">
          <button onClick={handleDelete}><i className="lar la-trash-alt"></i></button>
        </div>
        <div className="messages__textarea"><p className="messages__title">Message</p>{message}</div>
      </div>
    )
  }

export default MessageItemDetails;