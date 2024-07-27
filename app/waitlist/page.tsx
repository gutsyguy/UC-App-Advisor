"use client";
import React, { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Successfully joined the waitlist!");
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div
      className="min-h-screen bg-blue-500 flex justify-center items-center flex-col text-gold px-4"
    >
      <div className="text-center max-w-2xl">
        <h1 className="font-bold text-5xl mb-4">
          Unlock Your Path to UC Success!
        </h1>
        <h2 className="text-2xl mb-6">
          Expert Guidance by UCLA Students and AI
        </h2>
        <p className="mb-4">
          Join our waitlist for exclusive tips and personalized advice.
        </p>
        <form onSubmit={sendEmail} className="w-full max-w-md mx-auto">
          <div className="w-full flex flex-col justify-center my-4">
            <label htmlFor="email" className="font-bold text-lg mb-2">
              Email
            </label>
            <input
              className="border-gold text-black border-2 border-solid rounded-md p-2 mb-4"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
              id="email"
            />
            <button
              className="text-black py-2 bg-gold font-medium rounded-md px-8 border-gold border-2 border-solid hover-bg-gold-dark"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {message && <p className="text-center mt-4 text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default Waitlist;
