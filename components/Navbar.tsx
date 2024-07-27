import React from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/lib/routes";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div>
      <nav className="p-5 px-5 flex justify-evenly bg-white items-center">
        <Image src={"/logo.png"} width={48} height={48} alt="e" />
        {routes.map((route, index) => (
          <div key={index}>
            <Dropdown title={route.id} routes={route.routePath} />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
