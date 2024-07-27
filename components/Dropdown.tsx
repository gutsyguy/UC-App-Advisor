"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavItem } from "@/lib/interfaces";
import { useState } from "react";
import Link from "next/link";

const Dropdown = (props: NavItem) => {
  const { title, routes } = props;
  const [dropDown, setDropDown] = useState(true);

  const subItems = ["Account Setting", "Support", "License", "Sign out"];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
          {title}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {dropDown &&
            routes.map((item: any, index: number) => (
              <MenuItem key={index}>
                <Link
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
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
