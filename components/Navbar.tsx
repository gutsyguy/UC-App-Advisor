import React from "react";
import Image from "next/image";
import Link from "next/link";
import routes from "@/lib/routes";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div>
      <nav className="px-10 flex justify-evenly bg-[#00bfff] items-center">
        <Image src={"/logos.png"} width={64} height={64} alt="e" />
        {routes.map((route: any, index: number) => (
          <div key={index}>
            <Dropdown
              title={route.id}
              route={route.route}
              routes={route.routePath}
            />
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
