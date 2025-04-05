import React, {useState, useEffect} from "react";
import MainFetch from "@/call_helpers/mainFetch";
import { GET_PACKAGES } from "call_helpers/constant_url";
import Package from "@/components/common/Package";
import { connect } from "react-redux";
import { setPackageId } from "@/redux/reservation/actions";
import { transformKeysToCamelCaseArray } from "@/helpers/Utils";

const PackageReservation = ({match, setSelectedPackage, packagee}) => {

  const [packages, setPackages] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectedPackage = (idx) => {
      setSelectedId(idx);
      setSelectedPackage(packages[idx].public_id);
  }
  

  useEffect(async ()=> {
      const response = await new MainFetch(GET_PACKAGES, null, "GET").fetchCall;
      if (response.error) {
          console.log(error);
          return;
      }
      const data = transformKeysToCamelCaseArray(response.response);
      setPackages(data);

      // set selectedPage
      if (!packagee) return;
      const packageId = data.findIndex(pck => pck.public_id === packagee);
      setSelectedId(packageId);
  }, [])

  return(
      <div className="flex flex-wrap 2xl:px-64">
          {packages.map((package_, idx) => (
              <Package key={idx} packageElemt={package_} isClicked={idx === selectedId} handleClick={() => handleSelectedPackage(idx)} />
          ))}
      </div>
  );
};

const mapStateToProps = ({reservation}) => {
  const {packagee} = reservation;
  return {packagee}; 
};

export default connect(mapStateToProps, {
  setSelectedPackage: setPackageId,
})(PackageReservation);
