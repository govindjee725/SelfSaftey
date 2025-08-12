const axios = require('axios');

const getWitResponse = async (userMessage) => {
  const witToken = process.env.WIT_AI_TOKEN;

  if (!witToken) {
    throw new Error("Wit.ai server-side token is missing.");
  }

  const response = await axios.get(
    `https://api.wit.ai/message?v=20220225&q=${encodeURIComponent(userMessage)}`,
    {
      headers: {
        Authorization: `Bearer ${witToken}`,
      },
    }
  );

  if (response.data && response.data.text) {
    return response.data.text; // Adjust based on Wit.ai response structure
  }

  throw new Error("Invalid response from Wit.ai.");
};

module.exports = getWitResponse;
