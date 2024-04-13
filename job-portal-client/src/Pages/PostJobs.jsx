import React from "react";
import { useForm } from "react-hook-form";

const PostJobs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:3000/post-job",{
      method:"POST",
      headers:{"content-type" : "application/json"},
      body:JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.acknowledged===true)
        {
          alert("Job Posted Sucessfully 🎉🎊");
        }
        reset()
      });
  };
  return (
    <div className="mx-w-screen-2xl container mx-auto xl:px-24 px-4 mt-10 ">
      <div className="bg-light1/35 py-10 px-4 lg:px-16 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* first row */}
          <div className="flex  flex-col lg:flex-row item-center jus gap-8">
            <div className="lg:w-1/2 w-full ">
              <label className="block mb-2 text-lg font-medium text-primary">
                Job Title
              </label>
              <input
                type="text"
                defaultValue={"Web Dev"}
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
  );
};

export default PostJobs;
