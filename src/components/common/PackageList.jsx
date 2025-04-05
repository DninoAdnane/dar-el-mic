import React from "react";
import Package from "./Package";

const PackageList = ({packages}) => {
  return(
    <div className="row packges-box">
      {packages.map((cnt, idx) => (
        <Package packageElemt={cnt} key={idx} />
      ))}
    </div>
  );
};

export default PackageList;