import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="py-8 flex justify-between items-center">
      <h1 className=" text-2xl font-bold">Book Vibe</h1>
      <ul className="text-base flex items-center gap-x-5  text-gray-700">
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "font-bold border text-[#23BE0A] p-2 border-[#23BE0A]"
              : isPending
              ? "pending"
              : ""
          }
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "font-bold border text-[#23BE0A] p-2 border-[#23BE0A]"
              : isPending
              ? "pending"
              : ""
          }
          to="/listedBook"
        >
          <li>Listed Books</li>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive
              ? "font-bold border text-[#23BE0A] p-2 border-[#23BE0A]"
              : isPending
              ? "pending"
              : ""
          }
          to="/pagesRed"
        >
          <li>Pages to Read</li>
        </NavLink>
      </ul>
      <div className="text-base font-bold flex gap-3">
        <Button className="bg-[#23BE0A] text-white px-6 py-2 rounded-lg">
          Sing In
        </Button>
        <Button className="bg-[#59C6D2] text-white px-6 py-2 rounded-lg">
          Sing Up
        </Button>
      </div>
    </nav>
  );
};

export default Header;
