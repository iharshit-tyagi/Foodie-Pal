import React from "react";

const ShimmerList = ({ itemCount }) => {
  const shimmerRows = Array.from({ length: itemCount }, (_, index) => (
    <div key={index} className="flex justify-center mb-9">
      <div className="w-9/12 h-36 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
    </div>
  ));

  return <div className="mt-12">{shimmerRows}</div>;
};

export default ShimmerList;
