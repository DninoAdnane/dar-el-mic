import React, {useState, useEffect} from "react";
import MainFetch from "call_helpers/mainFetch";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setServiceId, removeServiceId } from "@/redux/reservation/actions";
import { GET_SERVICES_PACKAGE } from "call_helpers/constant_url";
import Service from "@/components/common/Service";
import { transformKeysToCamelCaseArray } from "@/helpers/Utils";


const ServiceReservation = ({match, packagee, selectedServices, setSelectedService, removeSelectedService}) => {
  
  const history = useHistory()

  const [services, setServices] = useState([]);

  const handleQuantityService = ({public_id, quantity}) => {
    console.log(quantity);
    if (quantity === 0) return removeSelectedService(public_id);
    setSelectedService({public_id, quantity});
  }

  const setDefaultSelectedServices = (data) => {
    data.forEach(srv => {
      if (srv.minQuantity > 0) {
        if (!selectedServices.some(srv1 => srv1.public_id === srv.public_id)) setSelectedService({
          public_id: srv.public_id,
          quantity: srv.minQuantity,
        });
      }
    });
  };

  useEffect(async () => {
    if (!packagee) history.push("package");
    const response = await new MainFetch(GET_SERVICES_PACKAGE(packagee), null, "GET").fetchCall;
    if (response.error) {
      console.log(error);
      return;
    }
    const data = transformKeysToCamelCaseArray(response.response);
    setDefaultSelectedServices(data);
    setServices(data);

  }, []);

  useEffect(() => {
    console.log(selectedServices);
  },[selectedServices]);

  return (
      <div className="flex flex-wrap 2xl:px-64">
        {services.map((service, idx) => {
          const selectedService = selectedServices.find(srv => srv.public_id === service.public_id);
          return (
            <div className="w-full sm:w-1/2 lg:w-1/3 px-[4px] sm:px-[8px] md:px-[12px] mb-[20px]">
              <Service 
                key={idx} 
                service = {service} 
                isClicked={!!selectedServices.some(srv => srv.public_id === service.public_id)} 
                handleClick={(props) => handleQuantityService(props)}
                quantity = {service.hasQuantity ? (selectedService?.quantity || service.minQuantity) : undefined}
              />
            </div>
          )
        })}
      </div>
  );
};

const mapStateToProps = ({reservation}) => {
  const {packagee, services: selectedServices} = reservation;
  return {packagee, selectedServices};
};

export default connect(mapStateToProps, {
  setSelectedService: setServiceId,
  removeSelectedService: removeServiceId,
})(ServiceReservation);