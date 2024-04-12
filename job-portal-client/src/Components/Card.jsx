import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline,IoCalendarOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
const Card = ({ data }) => {
  const {
    company,
    job_title,
    location,
    salary,
    description,
    requirements,
    posted_date,
    expiry_date,
  } = data;
  return (
    <section
      style={{
        margin: "20px",
        border: "2px solid rgb(66 72 116 / 62%)",
        borderRadius:"5px",
        padding: "20px",
        cursor: "pointer",
      }}
    >
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <div>
          <h4 className="text-primary/90 mb-1">{company}</h4>
          <h3 className="text-lg font-semibold text-primary mb-2">{job_title}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-5 mb-2 ">
            <span className="flex items-center gap-2">
                <IoLocationOutline/>{location}
            </span>
            
            <span className="flex items-center gap-2">
                {salary}
            </span>
            
            <span className="flex items-center gap-2">
                <IoCalendarOutline/>{posted_date}
            </span>
          </div>
          <p className="text-base text-primary/80 ">
            {description}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
