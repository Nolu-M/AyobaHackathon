import axios from 'axios';


// Function to get access token
const getAccessToken = async () => {
  try {
    const response = await axios.post('https://api.chenosis.io/oauth/client/accesstoken?grant_type=client_credentials', null, {
      headers: {
        'Authorization': `Basic ${Buffer.from('0tkSrLVwLniynmr7cJArhWIYPGlrdkh1:NGhk2GU52SVRYXT9').toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error.response?.data || error.message);
    throw error;
  }
};

// Function to send message
const sendMessage = async (accessToken, message, msisdns) => {
  try {
    const response = await axios.post('https://api.chenosis.io/ayoba/com/v1/business/message', {
      message: message,
      msisdns: msisdns
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error.response?.data || error.message);
    throw error;
  }
};

// Main function to get token and send message
const main = async () => {
  try {
    const accessToken = await getAccessToken();
    console.log('Access Token:', accessToken); // Debugging line to verify access token
    const message = {
      type: 'text',
      text: 'Hello nolubabalo!'
    };
    const msisdns = [
      '+27780697781'
    ];
    const result = await sendMessage(accessToken, message, msisdns);
    console.log('Message sent successfully:', result);
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};

main();