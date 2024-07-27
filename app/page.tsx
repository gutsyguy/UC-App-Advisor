'use client';
import { useState } from 'react';
import Chat from './Chat';
import Image from 'next/image';

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  const handleShowChat = () => {
    setShowChat(true);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      {!showChat ? (
        <>
          <h1 className="text-4xl font-bold mb-6">Welcome to UC Success!</h1>
          <p className="text-xl mb-4">Expert Guidance by UCLA Students and AI</p>
          <button
            onClick={handleShowChat}
            className="text-white py-2 bg-blue-500 font-medium rounded-md px-8 border-blue-500 border-2 border-solid hover:bg-blue-700"
          >
            Chat with Us
          </button>
        </>
      ) : (
        <Chat />
      )}
    </main>
  );
}
