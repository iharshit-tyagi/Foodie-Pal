import React from "react";

const PrevArrow = (props) => {
  return (
    <div
      className=" text-3xl cursor-pointer font-semibold text-center bg-gray-300 w-10 h-10 bg-center rounded-full hover:bg-slate-400"
      onClick={props.onClick}
    >
      {"<"}
    </div>
  );
};

export default PrevArrow;
