import React, { useState } from "react";
import Img from "../assets/Designer.png";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => {
    setIsMenuOpen(!IsMenuOpen);
  };
  const NavItems = [
    { path: "/", title: "Home" },
    { path: "/FindJobs", title: "Find Jobs" },
    { path: "/EditJobs", title: "Edit Jobs" },
    { path: "/PostJobs", title: "Post Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between item-center pt-5 pl-5 py-6">
        <a href="/" className="flex item-center gap-4 text-3xl text-primary">
          <img src={Img} alt="JobConnect" width={76} />
          <span className="content-center font-bold">JobConnect</span>
        </a>
        <ul className="hidden md:flex gap-12">
          {NavItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-light font-semibold content-center text-xl"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="text-primary font-medium space-x-5 hidden lg:block content-center text-xl">
          <Link to="/login" className="py-2 px-5 border rounded-full ">
            Sign in
          </Link>
          <Link
            to="/ForEmployers"
            className="py-2 px-5 border rounded-full bg-primary text-light1"
          >
            For Employers
          </Link>
        </div>

        <div className="pt-7 pl-5 md:hidden block">
          <button onClick={toggle}>
            {IsMenuOpen ? (
              <FaXmark className="w-6 h-6 text-primary content-center" />
            ) : (
              <FaBarsStaggered className="w-6 h-6 text-primary content-center" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`px-4 bg-black py-5 rounded ${IsMenuOpen ? "" : "hidden"}`}
      >
        <ul>
          {NavItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-light2 font-semibold content-center text-xl"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "text-light" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="my-4 mb-6">
            <Link
              to="/login"
              className="py-2 mr-3 px-5 border rounded-full text-light2 "
            >
              Sign in
            </Link>
          </li>
          <li className="my-4">
            <Link
              to="/ForEmployers"
              className="py-2 px-5 border rounded-full bg-primary text-light1"
            >
              For Employers
            </Link>
          </li>
        </ul>
      </div>
      <hr className="horizontal_ruler"/>
    </header>
  );
}

export default Navbar;
