import EnquiryItemDetails from "./EnquiryItemDetails";

const EnquiryItem = props => {
  return (
    <>
      {props.enquiries.map(enquiry => (
        <EnquiryItemDetails
          key={enquiry.id}
          enquiry={enquiry}
          handleChangeProps={props.handleChangeProps}
          deleteEnquiryProps={props.deleteEnquiryProps}
        />
      ))}
    </>
  )
}
export default EnquiryItem;