import React from "react";
import { RES_LOGO_CDN } from "../utils/constants";
const BestOfferElement = ({ data }) => {
  const { imageId } = data;
  return (
    <div>
      <img className="w-96  " src={RES_LOGO_CDN + imageId} />
    </div>
  );
};

export default BestOfferElement;
