import React, {useEffect, useState} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import icons
import { connect } from "react-redux";
import { setStep } from "@/redux/reservation/actions";

const StepNavigation = ({step, setCurrentStep}) => {
  const history = useHistory();
  const location = useLocation();

  const currentLocation = location.pathname.split("/").pop();
  const routes = ["decor", "package", "service","date-time"];

  const [nextRoute, setNexRoute] = useState(routes[1]);
  const [previousRoute, setPreviousRoute] = useState(null)

  useEffect(() => {
    setNexRoute(routes[step])
    setPreviousRoute(step > 1 ? routes[step -2] : null);
  }, [step]);

  useEffect(() => {
    setCurrentStep(routes.indexOf(currentLocation) + 1 ?? 1)
  }, [currentLocation]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex gap-6">
        {/* Back Button */}
        <button
          onClick={() => previousRoute && history.push(previousRoute)}
          className="flex items-center justify-center gap-2 py-2 w-36 border border-gray-600 rounded-full 
                      text-gray-800 hover:bg-gray-100 transition-all duration-300 
                      shadow-md hover:shadow-lg active:scale-95"
        >
          <ArrowLeft size={20} />
          Retour
        </button>

        {/* Forward Button */}
        <button
          onClick={() => history.push(nextRoute)}
          className="flex items-center justify-center gap-2 py-2 w-36 border border-gray-600 rounded-full 
                      text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 
                      shadow-md hover:shadow-lg active:scale-95"
        >
          Suivant
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({reservation}) => {
  const {step} = reservation;
  return {step};
};

export default connect(mapStateToProps, {
  setCurrentStep: setStep,
})(StepNavigation);