// /src/api/openai.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; // Backend base URL

/**
 * Sends a message to the backend and retrieves the AI response.
 * @param {string} message - The user's message.
 * @returns {Promise<string>} - The AI's response.
 */
export const sendMessageToAI = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/chat`, { message });
    return response.data.reply;
  } catch (error) {
    console.error("Error communicating with the backend:", error);
    throw new Error("Failed to get a response from the server.");
  }
};
