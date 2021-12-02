import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const EnquiryItemDetails = props => {

  async function handleDelete () {
    const confirmDelete = window.confirm("Are you sure you want to delete this enquiry?");

    if (confirmDelete) {
      props.deleteEnquiryProps(id)
    }
  }

  useEffect(() => {
    return () => {
    }
  }, [])

  const { id, name, email, establishment, fromDate, toDate, peopleAdults, peopleChildren, message } = props.enquiry;

    return (
      <div className="enquiries">
        <div className="enquiries__from"><p className="messageTitle">Order by</p>{name}</div>
        <div className="enquiries__email"><p className="messageTitle">E-mail</p>{email}</div>
        <div className="enquiries__replyOrDelete">
          <Link to="/"><i className="las la-reply"></i></Link>
          <button onClick={handleDelete}><i className="lar la-trash-alt"></i></button>
        </div>
        <div className="enquiries__establishment"><p className="messageTitle">Establishment</p>{establishment}</div>
        <div className="enquiries__fromDate"><p className="messageTitle">From date</p>{fromDate}</div>
        <div className="enquiries__toDate"><p className="messageTitle">To date</p>{toDate}</div>
        <div className="enquiries__adults"><p className="messageTitle">Adults</p>{peopleAdults}</div>
        <div className="enquiries__children"><p className="messageTitle">Children</p>{peopleChildren}</div>
        <div className="enquiries__textarea"><p className="messageTitle">Notes</p>{message}</div>
      </div>
    )
  }

export default EnquiryItemDetails;