import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EditJobs = () => {
  const [jobs, setjobs] = useState([]);
  const [searchtext, setsearchjobs] = useState("");
  const [loading, setloading] = useState(true);

  //set current page
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setloading(true);
    fetch("http://localhost:3000/myjobs/shan@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setjobs(data);
        setloading(false);
      });
  }, [searchtext]);

  //pagination
  const indexoflastitem = currentPage * itemsPerPage;
  const indexoffirstitem = indexoflastitem - itemsPerPage;
  const currentJobs = jobs.slice(indexoffirstitem, indexoflastitem);

  const nextPage = () => {
    if (indexoflastitem < jobs.length) {
      setcurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const handleCllick = () => {
    const filter = jobs.filter(
      (job) =>
        job.job_title.toLowerCase().indexOf(searchtext.toLowerCase()) !== -1
    );
    console.log(filter);
    setjobs(filter);
    setloading(false);
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Job deleted Sucessfully !!");
          window.location = '/EditJobs';
        }
      });
    console.log(id);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <div>
        <h1 className="text-center py-14 text-primary font-bold text-5xl ">
          My Jobs
        </h1>
        <div className="container flex flex-row gap-3">
          <input
            type="text"
            name="search"
            id=""
            className="py-2 lt-3  shadow-sm ring-1 ring-inset ring-light pl-3 border rounded-full focus:outline-none lg-w-6/12 mb-4 w-full"
            onChange={(e) => {
              setsearchjobs(e.target.value);
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
          <Link to="/PostJobs">
            <button className="bg-primary shadow-sm ring-1 ring-inset text-light1 font-semibold px-8 py-2 rounded-full mb-4 ">
              Post a New Job
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-light uppercase bg-gray-50 dark:bg-primary dark:text-light2">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    Title
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Company Name
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Salary
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Edit
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Delete
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
                  {jobs.map((job, index) => (
                    <tr
                      className="bg-white border-b text-black dark:bg-light1 dark:border-primary"
                      key={index}
                    >
                      <td className="py-4 px-6">{job.job_title}</td>
                      <td className="py-4 px-6">{job.company}</td>
                      <td className="py-4 px-6">{job.salary}</td>
                      <td className="py-4 px-6">
                        {" "}
                        <button>
                          <Link to={`/edit-job/${job?._id}`}> Edit</Link>
                        </button>
                      </td>
                      <td className="py-4 px-6">
                        {" "}
                        <button
                          className="bg-red-700 py-2 px-6 text-white rounded-full"
                          onClick={() => {
                            handleDelete(job._id);
                          }}
                        >
                          Delete
                        </button>{" "}
                      </td>
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
          {indexoflastitem < jobs.length && (
            <button className="hover:underline pt-3" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditJobs;
