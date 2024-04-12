import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
function Banner({Query,HadleInputChange,HadleLocationChange,QueryLocation}) {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold   text-primary mb-3">
        Find your <span className="text-light"> dream job </span>right now.
      </h1>
      <p className="text-lg text-black/70 mb-8">
        You can find numerous jobs in the computer, engineering, and technology
        sectors.
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-3 gap-4">
          <div className="flex rounded-full shadow-sm ring-1 ring-inset ring-light  focus:within:ring-2 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Which position are you interested in?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 focus:outline-none text-primary placeholder:text-gray-500  sm:text-smsm:leading-6"
              onChange={HadleInputChange}
              value={Query}
            />
             <IoIosSearch className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div>
          <div className="flex rounded-full shadow-sm ring-1 ring-inset ring-light focus:within:ring-2 md:w-1/3 w-full">
            <input
              type="text"
              name="Location"
              id="Location"
              placeholder="Location"
              onChange={HadleLocationChange}
              value={QueryLocation}
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-primary focus:outline-none placeholder:text-gray-500 focus:right-0 sm:text-smsm:leading-6"
              
            />
             <IoLocationOutline className="absolute mt-2.5 ml-2 text-gray-400"/>
          </div>
          <button type="submit" className="bg-primary py-2 px-8 text-light1 rounded-full">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Banner;
