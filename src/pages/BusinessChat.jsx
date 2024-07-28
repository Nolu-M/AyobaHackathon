import { useEffect, useState } from 'react';
import BusinessNav from "../components/BusinessNav";
import axios from 'axios';

const BusinessChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    const newMessage = { sender: 'Business', receiver: selectedUser, message };
    try {
      // Save the message locally
      await axios.post('http://localhost:5000/api/sendMessage', newMessage);
      setMessages(prevMessages => [...prevMessages, newMessage]);

      // Call Chenosis/Ayoba API to send the message
      await axios.post('https://api.chenosis.io/ayoba/com/v1/business/message', {
        sender: 'Business',
        receiver: selectedUser,
        message
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      setMessage('');
      setShowPopup(false);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowPopup(true);
  };

  return (
    <div>
      <BusinessNav />
      <div className="flex flex-col items-center mt-12">
        <div className="w-4/5 border border-gray-300 rounded-lg p-4 overflow-y-scroll mb-4">
          <h2 className="text-xl font-bold mb-4">Messages</h2>
          <ul>
            {messages.map((msg, index) => (
              <li key={index} className="mb-2">
                <button onClick={() => handleUserClick(msg.sender)} className="text-blue-500 hover:underline">
                  {msg.sender}: {msg.message}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {showPopup && selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-4">Reply to {selectedUser}</h3>
              <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
              <button onClick={() => setShowPopup(false)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 ml-2">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessChat;
