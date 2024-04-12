import React from "react";

const InputField = ({handlechange,value,title,name}) => {
  return (
    <label className="m-1 ">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handlechange}
      />
      <span className="ml-2"></span>{title}
    </label>
  );
};

export default InputField;
