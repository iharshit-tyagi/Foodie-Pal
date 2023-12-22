import React from "react";

const NextArrow = (props) => {
  return (
    <div
      className="text-3xl cursor-pointer absolute right-0 top-0 font-semibold text-center bg-gray-300 w-10 h-10 bg-center shadow-lg rounded-full hover:bg-slate-400"
      onClick={props.onClick}
    >
      {">"}
    </div>
  );
};

export default NextArrow;
