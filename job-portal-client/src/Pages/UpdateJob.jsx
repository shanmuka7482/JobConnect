import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";

const UpdateJob = () => {
    const {id}=useParams();
    const {_id, job_title, company, salary,location, posted_date, expiry_date, description, requirements, Posted_By}=useLoaderData()[0];
    console.log(job_title)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        // console.log(data);
        fetch(`http://localhost:3000/update-job/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.acknowledged === true) {
              alert("Job Updated Sucessfully 🎉🎊");
              window.location = '/EditJobs';
            }
            reset();
          });
      };
    return (
    <div className="mx-w-screen-2xl container mx-auto xl:px-24 px-4 mt-10 ">
    <div className="home_login_box py-10 px-4 lg:px-16 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* first row */}
        <div className="flex  flex-col lg:flex-row item-center jus gap-8">
          <div className="lg:w-1/2 w-full ">
            <label className="block mb-2 text-lg font-medium text-primary">
              Job Title
            </label>
            <input
              type="text"
              defaultValue={job_title}
              {...register("job_title")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full"
            />
          </div>
          <div className="lg:w-1/2 w-full ">
            <label className="block mb-2 text-lg font-medium text-primary">
              Company Name
            </label>
            <input
              type="text"
              placeholder={"Ex: Apple"}
              defaultValue={company}
              {...register("company")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full"
            />
          </div>
        </div>
        {/* Second Row */}
        <div className="flex  flex-col lg:flex-row item-center jus gap-8">
          <div className="lg:w-1/2 w-full ">
            <label className="block mb-2 text-lg font-medium text-primary">
              salary
            </label>
            <input
              type="text"
              placeholder={"$70,000 - $80,000"}
              defaultValue={salary}
              {...register("salary")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full"
            />
          </div>
          <div className="lg:w-1/2 w-full ">
            <label className="block mb-2 text-lg font-medium text-primary">
              location
            </label>
            <input
              type="text"
              placeholder={"Ex: Miami"}
              defaultValue={location}
              {...register("location")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full"
            />
          </div>
        </div>
        {/* 3rd Row */}
        <div className="flex  flex-col lg:flex-row item-center jus gap-8">
          <div className="lg:w-1/2 w-full ">
            <label className="block mb-2 text-lg font-medium text-primary">
              Job Posting Date
            </label>
            <input
              type="date"
              defaultValue={posted_date}
              {...register("posted_date")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full pr-5"
            />
          </div>
          <div className="lg:w-1/2 w-full ">
            <label className="block mb-2 text-lg font-medium text-primary">
              Job Expiry Date
            </label>
            <input
              type="date"
              defaultValue={expiry_date}
              {...register("expiry_date")}
              className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full pr-5"
            />
          </div>
        </div>
        {/* 4th Row */}
        <div className="w-full">
          <label className="block mb-2 text-lg font-medium text-primary">
            Job Discription
          </label>
          <textarea
            className="w-full pl-3 py-1.5 focus:outline-none "
            rows={6}
            defaultValue={description}
            placeholder="Jobs Discription"
            {...register("description")}
          />
        </div>
        {/* 5th Row */}
        <div className="w-full">
          <label className="block mb-2 text-lg font-medium text-primary">
            Job Requirements
          </label>
          <textarea
            className="w-full pl-3 py-1.5 focus:outline-none "
            rows={3}
            defaultValue={requirements}
            placeholder="Jobs Requirements"
            {...register("requirements")}
          />
        </div>
        {/* last row */}
        <div className="w-full ">
          <label className="block mb-2 text-lg font-medium text-primary">
            Job Posted By
          </label>
          <input
            type="email"
            defaultValue={Posted_By}
            readOnly
            placeholder={"name@gmail.com"}
            {...register("Posted_By")}
            className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-primary placeholder:text-grey-400 focus:outline-none sm:text-sm sm:leading-6 rounded-full"
          />
        </div>
        <input
          type="submit"
          className="block mt-12 bg-primary text-light1 font-semibold px-8 py-2 rounded-full cursor-pointer"
        />
      </form>
    </div>
  </div>
  )
}

export default UpdateJob