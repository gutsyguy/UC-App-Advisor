"use client";
import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const chatContainer = useRef(null);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Add user's message to the chat
    const userMessage = { role: "user", content: input };
    // @ts-ignore
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input field
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const result = await response.json();

      if (response.ok) {
        // Add AI's response to the chat
        // @ts-ignore
        setMessages((prevMessages) => [...prevMessages, ...result.messages]);
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  useEffect(() => {
    if (chatContainer.current) {
      // @ts-ignore
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }, [messages]);

  const renderResponse = () => {
    return (
      <div className="response">
        {messages.map((m: any, index) => (
          <div
            key={index}
            className={`chat-line ${
              m.role === "user" ? "user-chat" : "ai-chat"
            } text-blue`}
          >
            <div className="w-full ml-4">
              <p className="message">{m.content}</p>
              {index < messages.length - 1 && (
                <div className="horizontal-line" />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpeg')" }}
    >
      <div
        ref={chatContainer}
        className="w-full max-w-3xl h-1/2 p-4 bg-gray-800 bg-opacity-90 rounded-lg overflow-y-auto"
      >
        {renderResponse()}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl p-4 mt-4 bg-gray-700 bg-opacity-90 rounded-lg"
      >
        <input
          name="input-field"
          type="text"
          placeholder="Find your major"
          onChange={handleInputChange}
          value={input}
          className="w-full p-3 mb-2 border border-gray-500 rounded-md bg-gray-900 text-white"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Send message
        </button>
      </form>
      {message && <h2 className="text-red-500 mt-4">{message}</h2>}
    </div>
  );
};

export default Chat;
