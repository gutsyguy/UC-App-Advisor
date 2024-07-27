"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavItem } from "@/lib/interfaces";
import { useState } from "react";
import Link from "next/link";

const Dropdown = (props: NavItem) => {
  const { title, routes } = props;
  const [dropDown, setDropDown] = useState(true);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center rounded-md px-10 py-10 text-2xl font-semibold text-white shadow-sm hover:bg-[#0080ff] hover:text-[#ff00bf]">
          {title}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute flex justify-start right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {dropDown &&
            routes.map((item: any, index: number) => (
              <MenuItem key={index}>
                <Link
                  className="block px-4 py-2 text-2xl text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  href={item.path}
                >
                  {item.route}
                </Link>
              </MenuItem>
            ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
