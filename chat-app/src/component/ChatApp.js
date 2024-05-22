import React, { useState, useEffect } from 'react';
import Header from './Header';
import ChatArea from './ChatArea';
import MessageBox from './MessageBox';
import axios from 'axios';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const caseDetails = {
    productName: 'I want to cancel my subscription',
    status: 'Admin',
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/messages').then((response) => {
      setMessages(response.data);
    });
  }, []);

  const handleSendMessage = (text) => {
    const newMessage = { text, isUser: true, createdAt: new Date().toISOString() };
    setMessages([...messages, newMessage]);

    axios.post('http://localhost:5000/api/messages', newMessage).then((response) => {
      setMessages([...messages, newMessage, response.data]);
    });
  };

  return (
    <div>
      <Header caseDetails={caseDetails} />
      <ChatArea messages={messages} />
      <MessageBox onSend={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
