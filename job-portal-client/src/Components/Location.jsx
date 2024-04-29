import React from "react";
import InputField from "./InputField";

function Location({ handlechange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2 text-primary">Locatioin</h4>
      <div className="flex flex-col">
        <label className="m-1   ">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handlechange}
          />
          <span className="ml-2"></span>ALL
        </label>
        <InputField
          handlechange={handlechange}
          value="Vijayawada"
          title="Vijayawada"
          name="test"
        />
        <InputField
          handlechange={handlechange}
          value="Delhi"
          title="Delhi"
          name="test"
        />
        <InputField
          handlechange={handlechange}
          value="Bangalore"
          title="Bangalore"
          name="test"
        />
        <InputField
          handlechange={handlechange}
          value="Hyderabad"
          title="Hyderabad"
          name="test"
        />
      </div>
    </div>
  );
}

export default Location;
