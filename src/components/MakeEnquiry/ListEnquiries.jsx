import { useState, useEffect } from "react";
import EnquiryItem from "./EnquiryItem";

const ListEnquiries = () => {
  const [enquiries, setEnquiries] = useState(getInitialEnquiries());

  const handleChange = id => {
    setEnquiries(prevState =>
      prevState.map(enquiry => {
        if (enquiry.id === id) {
          return {
            ...enquiry,
          }
        }
        return enquiry
      })
    )
  }

  const delEnquiry = id => {
    setEnquiries([
      ...enquiries.filter(enquiry => {
        return enquiry.id !== id
      }),
    ])
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
      <div>
        <div>
          <EnquiryItem 
            enquiries={enquiries} 
            handleChangeProps={handleChange} 
            deleteEnquiryProps={delEnquiry}
          />
        </div>
      </div>
    );
  }

export default ListEnquiries;