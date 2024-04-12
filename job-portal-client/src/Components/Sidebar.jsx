import React from "react";
import Location from "./Location";

function Sidebar({ handlechange }) {
  return (
    <div className="space-y-5">
      <h3 className="text-lg  font-bold mb-2 text-primary">Filters</h3>
      <Location handlechange={handlechange}/>
    </div>
  );
}

export default Sidebar;
