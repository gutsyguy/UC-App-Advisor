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
      className="min-h-screen bg-cover bg-no-repeat flex justify-center items-center bg-center bg-white text-black"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <div className="w-full max-w-md text-center">
        <h1 className="font-bold text-4xl text-[#9a9500]">
          We know applying to college is scary, <br /> but we can help ease your
          worries a bit
        </h1>
        <h2 className="mt-4">Join our waitlist</h2>
        <form
          onSubmit={sendEmail}
          className="w-full mt-4 flex flex-col items-center"
        >
          <div className="w-full flex flex-col items-center my-4">
            <label htmlFor="email" className="font-bold text-black mb-2">
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
              className="text-white py-2 mt-4 bg-gray-700 font-medium rounded-md px-8 border-[#D8A206] border-2 border-solid"
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
