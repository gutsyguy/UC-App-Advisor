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
      className="min-h-screen bg-cover bg-no-repeat flex justify-center items-center bg-center bg-[#0080ff] text-black"
      style={
        {
          // backgroundImage: "url('/background.png')",
        }
      }
    >
      <div className="w-full max-w-md text-center">
        <h1 className="font-bold text-4xl text-[#c6c012]">
          Unlock your path to UC <br /> Success!
        </h1>
        <h2 className="text-[#c6c012] text-xl">
          Expert guidance by UCLA students and AI
        </h2>
        <h2 className="mt-4 text-[#c6c012]">
          Join our waitlist for exclusive tips and personal advice
        </h2>
        <form
          onSubmit={sendEmail}
          className="w-full mt-2 flex flex-col items-center"
        >
          <div className="w-full flex flex-col items-center my-4">
            <label htmlFor="email" className="font-bold text-[#c6c012] mb-2">
              Email
            </label>
            <input
              className="border-[#D8A206] text-black border-2 border-solid rounded-md p-2 w-full"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
              id="email"
            />
            <button
              className="text-white py-2 mt-4 w-full bg-gray-700 font-medium rounded-md px-8 border-[#D8A206] border-2 border-solid"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {message && <p className="mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default Waitlist;
