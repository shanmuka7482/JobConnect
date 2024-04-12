import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch("jobs.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error gracefully, e.g., display an error message
      }
    };

    // Call fetchData function inside useEffect
    fetchData();

    // useEffect cleanup (optional)
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const numberOfJobs = jobs.length;
  const companyNames = jobs.map((job) => job.company);
  const uniqueCompanyNames = new Set(companyNames);
  const numberOfUniqueCompanies = uniqueCompanyNames.size;

  return (
    <div className="text-primary flex gap-2 max-w-screen-2xl container mx-auto xl:px-24 px-4 md:pt-20 pt-14 flex-wrap">
      <div className="mt-20 lg:ml-20 lg:w-5/12">
        <h1 className="font-normal text-5xl leading-relaxed">
          Find the Right fit. Remote-Friendly.
        </h1>
        <hr className="horizontal_ruler my-3" />
        <p className="mt-10">
          Don't just change jobs. Transform your career. Begin your journey by
          searching our latest career opportunities.
        </p>
        <div className="flex space-x-14 mt-12 w-full ">
          <div>
            <h1 className="font-normal text-5xl">{numberOfJobs}</h1>
            <p className="mt-4">available jobs</p>
          </div>
          <div>
            <h1 className="font-normal text-5xl">{numberOfUniqueCompanies}</h1>
            <p className="mt-4">Companies jobs</p>
          </div>
        </div>
      </div>
      <div className="mt-20 lg:ml-20 lg:w-1/3 rounded-3xl bg-black/5 items-center shrink p-8 content-center shadow-transparent">
        <h2 className="font-medium text-xl mb-3">Search for Job</h2>
        <p>Search Million of jobs. Do meaningful work that impact the world</p>
        <div className="flex md:rounded-s-md rounded w-full mt-4">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Job Title?"

            className="block flex-1 border-0 focus:outline-none bg-transparent py-1.5 pl-8 text-primary placeholder:text-primary focus:right-0 sm:text-smsm:leading-6"
          />
          <IoIosSearch className="absolute mt-2.5 ml-2 text-gray-400" />
        </div>
        <hr className="horizontal_ruler" />
        <div className="flex md:rounded-s-md rounded w-full mt-4">
          <input
            type="text"
            name="Location"
            id="Location"
            placeholder="Location"

            className="block flex-1 border-0 focus:outline-none bg-transparent py-1.5 pl-8 text-primary placeholder:text-primary focus:right-0 sm:text-smsm:leading-6"
          />
          <BsGlobe2 className="absolute mt-2.5 ml-2 text-gray-400" />
        </div>
        <hr className="horizontal_ruler" />
        <Link to="/FindJobs">
          <button className="py-2 mt-6 w-full px-5 border rounded-full bg-primary text-light1">
            For Employers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
