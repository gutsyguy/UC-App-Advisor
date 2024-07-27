"use client";
import React from "react";
import { useState } from "react";
import { NavItem } from "@/lib/interfaces";
import Link from "next/link";

const Dropdown = (props: NavItem) => {
  const { title, routes } = props;
  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <h1
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
      >
        {title}
      </h1>
      <div className="flex flex-col">
        {dropDown && (
          <div>
            <Link href="/mac">Fire</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
