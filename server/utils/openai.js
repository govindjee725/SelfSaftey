const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this environment variable is set correctly
});

const openai = new OpenAIApi(configuration);

module.exports = openai;
