import React, { useState } from 'react';

// Define the colors
const colors = {
  primary: '#005bb5', // Dark blue
  secondary: '#ff0000', // Red
  accent: '#ffd700', // Orange
  background: '#f5f5f5', // Light grey
  textPrimary: '#ffffff', // White
  textSecondary: '#000000', // Black
};

const categories = [
  { name: 'BIZHUB', color: colors.primary },
  { name: 'YOBA-YOGA', color: colors.primary },
  { name: 'ABOUT', color: colors.primary },
  { name: 'FORUM', color: colors.secondary },
  { name: 'REVIEW', color: colors.primary },
];

const BusinessPage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'HELLO, HOW MUCH PER SESSION?', sender: 'A' },
    { id: 2, text: 'HI, R 120 PER SESSION.', sender: 'B' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, sender: 'B' }]);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-primary h-full w-1/4 flex flex-col items-center space-y-4 py-8">
        <img src="src\ayobalogo.png" alt="Ayoba Logo" className="w-24 mb-8" /> {/* Ayoba logo */}
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`w-3/4 p-4 text-center text-white rounded-md cursor-pointer ${index === 3 ? 'bg-secondary' : 'bg-primary'}`}
            style={{ backgroundColor: category.color }}
          >
            <span className={`text-${index === 3 ? 'red-500' : 'yellow-500'} font-bold`}>{category.name}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-8">
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold">
            <span className="text-red-500">Live</span> <span className="text-blue-500">Chat</span>
          </span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-2xl">
            {/* Chat messages */}
            <div className="bg-white p-4 rounded-md shadow-md mb-4 h-96 overflow-y-auto">
              {messages.map((msg) => (
                <div key={msg.id} className={`mb-2 flex items-center ${msg.sender === 'B' ? 'justify-end' : ''}`}>
                  {msg.sender === 'A' && (
                    <div className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">A</span>
                    </div>
                  )}
                  <div className={`bg-${msg.sender === 'A' ? 'primary' : 'primary'} p-2 rounded-md text-black`}>
                    {msg.text}
                  </div>
                  {msg.sender === 'B' && (
                    <div className="bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center ml-2">
                      <span className="text-black">B</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message input */}
            <div className="flex items-center space-x-2">
              <input 
                type="text" 
                className="flex-1 p-2 border rounded-md" 
                placeholder="Type your message here..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="bg-primary text-white p-2 rounded-md" onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;

