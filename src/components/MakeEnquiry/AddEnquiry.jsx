import React, { useState, useEffect } from "react"
import EnquiryInput from "./EnquiryInput"
import { v4 as uuidv4 } from "uuid";

const AddEnquiry = () => {
  const [enquiries, setEnquiries] = useState(getInitialEnquiries());

  const addEnquiryItem = (name, email, establishment, fromDate, toDate, peopleAdults, peopleChildren, message) => {
    const newEnquiry = {    
      id: uuidv4(),    
      name: name,    
      email: email,
      establishment: establishment,
      fromDate: fromDate,
      toDate: toDate,
      peopleAdults: peopleAdults,
      peopleChildren: peopleChildren,
      message: message,
    }
    setEnquiries([...enquiries, newEnquiry])
  }

  function getInitialEnquiries() {
    const temp = localStorage.getItem("enquiries")
    const savedEnquiries = JSON.parse(temp)
    return savedEnquiries || []
  }

  useEffect(() => {
    const temp = JSON.stringify(enquiries)
    localStorage.setItem("enquiries", temp)
  }, [enquiries])

    return (
      <>
        <EnquiryInput addEnquiryProps={addEnquiryItem} />
      </>
    );
  }

export default AddEnquiry;