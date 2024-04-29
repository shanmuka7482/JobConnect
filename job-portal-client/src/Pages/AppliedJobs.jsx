import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Appliedresume = () => {
  const [resume, setresume] = useState([]);
  const [searchtext, setsearchresume] = useState("");
  const [loading, setloading] = useState(true);

  //set current page
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setloading(true);
    fetch("http://localhost:3000/all-resume")
      .then((res) => res.json())
      .then((data) => {
        setresume(data);
        setloading(false);
      });
  }, [searchtext]);

  //pagination
  const indexoflastitem = currentPage * itemsPerPage;
  const indexoffirstitem = indexoflastitem - itemsPerPage;
  const currentresume = resume.slice(indexoffirstitem, indexoflastitem);

  const nextPage = () => {
    if (indexoflastitem < resume.length) {
      setcurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const handleCllick = () => {
    const filter = resume.filter(
      (job) =>
        job.Name.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1
    );
    console.log(filter);
    setresume(filter);
    setloading(false);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <div>
        <h1 className="text-center py-14 text-primary font-bold text-5xl ">
          Applied Students
        </h1>
        <div className="container flex flex-row gap-3">
          <input
            type="text"
            name="search"
            id=""
            className="py-2 lt-3  shadow-sm ring-1 ring-inset ring-light pl-3 border rounded-full focus:outline-none lg-w-6/12 mb-4 w-full"
            onChange={(e) => {
              setsearchresume(e.target.value);
            }}
          />
          <button
            className="bg-primary shadow-sm ring-1 ring-inset text-light1 font-semibold px-8 py-2 rounded-full mb-4 "
            onClick={handleCllick}
          >
            Search
          </button>
        </div>
      </div>
      {/* table */}
      <div className="flex justify-center min-h-[450px] flex-col">
        <div className="items-end text-right">
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-light uppercase bg-gray-50 dark:bg-primary dark:text-light2">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    s.no
                  </th>
                  <th scope="col" className="py-3 px-6">
                    student name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Interested Company
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Resume
                  </th>
                </tr>
              </thead>

              {loading ? (
                <div>
                  <p className="flex items-center justify-center h-20">
                    Loading....
                  </p>
                </div>
              ) : (
                <tbody>
                  {resume.map((job, index) => (
                    <tr
                      className="bg-white border-b text-black dark:bg-light1 dark:border-primary"
                      key={index}
                    >
                    <td className="py-4 px-6">{index+1}</td>
                      <td className="py-4 px-6">{job.Name}</td>
                      <td className="py-4 px-6">{job.Intrested_Job}</td>
                      <td className="py-4 px-6">{job.Url}</td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="flex justify-center text-black space-x-8 ">
          {currentPage > 1 && (
            <button className="hover:underline pt-3" onClick={prevPage}>
              Previous
            </button>
          )}
          {indexoflastitem < resume.length && (
            <button className="hover:underline pt-3" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appliedresume;
