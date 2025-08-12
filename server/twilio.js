const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Twilio client instance
const client = twilio(accountSid, authToken);

/**
 * Sends a location message to a specific phone number.
 * @param {string} phone - Recipient's phone number (E.164 format, e.g., +919876543210).
 * @param {string} lat - Latitude of the location.
 * @param {string} lng - Longitude of the location.
 * @returns {Promise<Object>} - The response from Twilio API.
 */
const sendLocationMessage = async (phone, lat, lng) => {
  const locationURL = `https://www.google.com/maps?q=${lat},${lng}`;
  const message = `🚨 SOS Alert! Here is my location: ${locationURL}`;

  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: phone,
    });
    return { success: true, response };
  } catch (error) {
    console.error('Error sending Twilio message:', error.message);
    throw new Error(error.message);
  }
};

module.exports = { sendLocationMessage };
