import React, { useEffect } from "react"

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
        <div className="enquiries__from"><p className="messages__title">Order by</p>{name}</div>
        <div className="enquiries__email"><p className="messages__title">E-mail</p>{email}</div>
        <div className="enquiries__delete">
          <button onClick={handleDelete}><i className="lar la-trash-alt"></i></button>
        </div>
        <div className="enquiries__establishment"><p className="messages__title">Establishment</p>{establishment}</div>
        <div className="enquiries__fromDate"><p className="messages__title">From date</p>{fromDate}</div>
        <div className="enquiries__toDate"><p className="messages__title">To date</p>{toDate}</div>
        <div className="enquiries__adults"><p className="messages__title">Adults</p>{peopleAdults}</div>
        <div className="enquiries__children"><p className="messages__title">Children</p>{peopleChildren}</div>
        <div className="enquiries__textarea"><p className="messages__title">Notes</p>{message}</div>
      </div>
    )
  }

export default EnquiryItemDetails;