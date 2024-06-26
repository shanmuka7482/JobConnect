import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setjob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setjob(data[0]);
      });
  }, []);
  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
      console.log(url);
      const resume = {
        Name: "Siva",
        Url: url,
        Intrested_Job :job.job_title,
      }; // Wrap the resume object in an array

      fetch("http://localhost:3000/resume-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resume), // Send the resume object wrapped in an array
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((result) => {
          console.log(result);
          if (result.acknowledged  === true) {
            // Assuming the backend sends status as true/false
            alert("Resume sent successfully 🎉🎊");
          } else {
            alert("Resume upload failed");
          }
          reset(); // Assuming reset() is defined elsewhere
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          // Handle errors here, e.g., show an error message to the user
        });
    } else {
      console.error("URL is not defined");
    }
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 h-max">
      <div className="h-80  bg-light2/35 flex items-center justify-center	">
        <div>
          <h2 className="font-bold text-primary text-5xl pb-4">Job Details</h2>
          <h5 className="pl-16 inline ">
            <Link to="/">Home</Link>
          </h5>
          <h6 className="inline">
            {" "}
            / <Link to="/FindJobs">Find Jobs</Link>
          </h6>
        </div>
      </div>
      <div className="mt-5"></div>
      <h3 className="text-3xl text-primary">{job.job_title}</h3>
      <p className="text-primary/70">{job.company}</p>
      <p className="pt-5">{job.description}</p>
      <div className="text-primary text-base flex flex-wrap gap-5 mb-2 mt-5 ">
        <span className="flex items-center gap-2">
          <IoLocationOutline />
          {job.location}
        </span>

        <span className="flex items-center gap-2">{job.salary}</span>

        <span className="flex items-center gap-2">
          <IoCalendarOutline />
          {job.posted_date}
        </span>
      </div>
      <button
        className="block mt-12 bg-primary text-light1 font-semibold px-8 py-2 rounded-full "
        onClick={handleApply}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
