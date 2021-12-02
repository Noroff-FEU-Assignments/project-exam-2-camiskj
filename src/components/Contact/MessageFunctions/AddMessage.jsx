import React, { useState, useEffect } from "react";
import MessageInput from "../Inputs/MessageInput";
import { v4 as uuidv4 } from "uuid";

const AddMessage = () => {
  const [messages, setMessages] = useState(getInitialMessages());

  const addMessageItem = (name, email, message) => {
    const newMessage = {    
      id: uuidv4(),    
      name: name,    
      email: email,
      message: message,
    };
    setMessages([...messages, newMessage])
  };

  function getInitialMessages() {
    const temp = localStorage.getItem("messages")
    const savedMessages = JSON.parse(temp)
    return savedMessages || []
  };

  useEffect(() => {
    const temp = JSON.stringify(messages)
    localStorage.setItem("messages", temp)
  }, [messages]);

    return (
        <MessageInput addTodoProps={addMessageItem} />
    );
  }

export default AddMessage;