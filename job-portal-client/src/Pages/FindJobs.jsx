import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Components/Sidebar";
import NewsLater from "../Components/NewsLater";

function Findjobs() {
  const [SelectCategoey, SetSelectCategoey] = useState(null);
  const [jobs, Setjobs] = useState([]);
  const [isLoading, SetLoading] = useState(true);
  const [CurrentPage, SetCurrentPage] = useState(1);
  const ItemPerPage = 6;

  useEffect(() => {
    SetLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        Setjobs(data);
        SetLoading(false);
      });
  }, []);

  const [Query, SetQuery] = useState("");
  const [QueryLocation, SetQueryLocation] = useState("");
  const HadleInputChange = (event) => {
    SetQuery(event.target.value);
  };
  //Loaction
  const HadleLocationChange = (event) => {
    SetQueryLocation(event.target.value);
  };
  //filter
  const FilteredItems = jobs.filter(
    (job) => job.job_title.toLowerCase().indexOf(Query.toLowerCase()) !== -1
  );
  const FilteredLocationItems = jobs.filter(
    (job) =>
      job.location.toLowerCase().indexOf(QueryLocation.toLowerCase()) !== -1
  );
  //radio
  const handlechange = (event) => {
    SetSelectCategoey(event.target.value);
  };
  //per page calculation
  const calculatePageRange = () => {
    const StartIdex = (CurrentPage - 1) * ItemPerPage;
    const endIndex = StartIdex + ItemPerPage;
    return { StartIdex, endIndex };
  };
  //next page
  const nextPage = () => {
    if (CurrentPage < Math.ceil(FilteredItems.length / ItemPerPage)) {
      SetCurrentPage(CurrentPage + 1);
    }
  };
  //Previous page
  const PrevPage = () => {
    if (CurrentPage > 1) {
      SetCurrentPage(CurrentPage - 1);
    }
  };

  const FilteredData = (jobs, selected, Query, QueryLocation) => {
    let Filteredjobs = jobs;
    //filtering input items
    if (Query) {
      Filteredjobs = FilteredItems;
    }
    if (QueryLocation) {
      Filteredjobs = FilteredLocationItems;
    }
    //category
    if (selected) {
      Filteredjobs = Filteredjobs.filter(
        ({ location, salary }) =>
          location.toLowerCase() === selected.toLowerCase() ||
          parseInt(salary) <= parseInt(selected)
      );
      // console.log(Filteredjobs);
    }

    //slice the data basd on page
    const { StartIdex, endIndex } = calculatePageRange();
    Filteredjobs = Filteredjobs.slice(StartIdex, endIndex);

    return Filteredjobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = FilteredData(jobs, SelectCategoey, Query, QueryLocation);

  return (
    <div>
      <Banner
        Query={Query}
        HadleInputChange={HadleInputChange}
        HadleLocationChange={HadleLocationChange}
        QueryLocation={QueryLocation}
      />
      {/* main content */}
      <div className="home_login_box md:grid grid-cols-4 gap-3 lg:px-24 px-4 py-12 rounded-5xl">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handlechange={handlechange} />
        </div>
        {/* jobs cards */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? (
            <p>Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2 text-primary">
                {result.length} Jobs
              </h3>
              <p>No Data Found</p>
            </>
          )}

          {/* Pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={PrevPage}
                disabled={CurrentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {CurrentPage} of{" "}
                {Math.ceil(FilteredItems.length / ItemPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  CurrentPage === Math.ceil(FilteredItems.length / ItemPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* right side */}
        <div className="bg-white p-4 rounded">
          <NewsLater />
        </div>
      </div>
    </div>
  );
}

export default Findjobs;
