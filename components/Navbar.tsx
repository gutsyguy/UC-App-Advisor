import React from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/lib/routes";
import Dropdown from "./Dropdown";
import Drop from "./Drop";

const Navbar = () => {
  return (
    <div>
      <nav className="p-5 px-5 flex justify-evenly bg-white items-center">
        <Image src={"/logo.png"} width={48} height={48} alt="e" />
        {routes.map((route, index) => (
          <div key={index}>
            <Drop title={route.id} routes={route.routePath}/>
            {/* <Dropdown title={route.id} routes={"e"} paths="e" /> */}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
