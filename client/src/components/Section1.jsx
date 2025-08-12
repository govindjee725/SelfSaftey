import React, { useState, useEffect } from "react";
import axios from "axios";

// Section: Message Display
const MessageDisplay = ({ messages, isLoading }) => {
  useEffect(() => {
    const chatContainer = document.querySelector(".overflow-y-auto");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="h-64 overflow-y-auto border p-4 mb-4 bg-gradient-to-r from-purple-100 to-violet-200 rounded-lg shadow-inner">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex mb-3 ${
            msg.sender === "User" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender === "Bot" && (
            <div className="flex items-center mr-2">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>
          )}
          <div>
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === "User"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </span>
            <div
              className={`text-xs mt-1 ${
                msg.sender === "User" ? "text-right text-gray-400" : "text-left text-gray-500"
              }`}
            >
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
          <span className="text-sm text-gray-800 animate-pulse">Typing...</span>
        </div>
      )}
    </div>
  );
};

// Section: Input and Send Button
const InputSection = ({ input, setInput, sendMessage }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        aria-label="Chat input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 shadow"
        placeholder="Type your message..."
      />
      <button
        aria-label="Send message"
        onClick={sendMessage}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        Send
      </button>
    </div>
  );
};

// Main Section
const Section1 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "User" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/chat`,
          { message: input }
        );

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.message, sender: "Bot" },
        ]);
      } catch (error) {
        console.error("Error with backend:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Error communicating with the chatbot service.",
            sender: "Bot",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please enter a valid message.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-xl py-36">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Chat with the Bot
      </h2>
      <MessageDisplay messages={messages} isLoading={isLoading} />
      <InputSection input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
};

export default Section1;
