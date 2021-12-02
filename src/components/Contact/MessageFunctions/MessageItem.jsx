import MessageItemDetails from "./MessageItemDetails";

const MessageItem = props => {
  return (
    <>
      {props.messages.map(message => (
        <MessageItemDetails
          key={message.id}
          message={message}
          handleChangeProps={props.handleChangeProps}
          deleteMessageProps={props.deleteMessageProps}
        />
      ))}
    </>
  )
}
export default MessageItem;