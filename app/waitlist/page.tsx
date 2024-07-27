"use client";
import React from "react";
import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    let inputValue = e.target.value;
    setEmail(inputValue);
  };

  const sendEmail = async () => {};

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat flex justify-center items-center flex-col bg-center bg-white text-black"
      style={{
        backgroundImage: "url('/background.png')",
        // filter: "blur(2px)",
        // backdropFilter: "blur('4x')",
      }}
    >
      <div
        style={
          {
            //   filter: "blur(-8px)",
          }
        }
      >
        <h1 className="text-center font-bold text-4xl text-[#9a9500] ">
          We know applying to college is scary, <br /> but we can help ease your
          worries a bit
        </h1>
        <h2>Join our waitlist</h2>
        <form action="" onSubmit={sendEmail}>
          <div className="w-full flex flex-col my-4">
            <label htmlFor="email" className="font-bold text-white">
              Email
            </label>
            <input
              className="border-[#D8A206] text-black border-2 border-solid rounded-md"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email"
              id="email"
            />
            <button
              className="text-white py-2 mt-[2rem] bg-gray-700 font-medium rounded-md mb-4 px-[5rem] border-[#D8A206] border-2 border-solid"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
