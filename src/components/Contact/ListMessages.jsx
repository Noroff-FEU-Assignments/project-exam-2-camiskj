import { useState, useEffect } from "react";
import MessageItem from "./MessageItem";

const ListMessages = () => {
  const [messages, setMessages] = useState(getInitialMessages());

  const handleChange = id => {
    setMessages(prevState =>
      prevState.map(message => {
        if (message.id === id) {
          return {
            ...message,
          }
        }
        return message
      })
    )
  }

  const delMessage = id => {
    setMessages([
      ...messages.filter(message => {
        return message.id !== id
      }),
    ])
  }

  function getInitialMessages() {
    const temp = localStorage.getItem("messages")
    const savedMessages = JSON.parse(temp)
    return savedMessages || []
  }

  useEffect(() => {
    const temp = JSON.stringify(messages)
    localStorage.setItem("messages", temp)
  }, [messages])

    return (
      <div>
        <div>
          <MessageItem 
            messages={messages} 
            handleChangeProps={handleChange} 
            deleteMessageProps={delMessage}
          />
        </div>
      </div>
    );
  }

export default ListMessages;