import React from "react";
import { MdDangerous } from "react-icons/md";

const Error = () => {
  return (
    <div className="d-flex justify-content-center text-white lead">
      <MdDangerous size="30" className="text-danger mx-2" />
      Whoops, something went wrong
    </div>
  );
};

export default Error;
