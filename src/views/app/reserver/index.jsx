import React, {Suspense, useState, useEffect} from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CheckCircle, Circle} from "lucide-react";

import { getReservationData, setReservationData } from "@/helpers/Utils";
import StepNavigation from "./step-navigation";
import { connect } from "react-redux";

const DateTimePicker = React.lazy(()=> import('./date-time'));
const Decor = React.lazy(() => import('./decor'));
const Package = React.lazy(() => import('./package'));
const Service = React.lazy(() => import('./service'));

const steps = [
  { id: 1, label: "Décor"},
  { id: 2, label: "Package"},
  { id: 3, label: "Services supplémentaires"},
  { id: 4, label: "Date et l'heure"},
];

const Reserver = ({match, currentStep}) => {

  useEffect(() => {
    
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center w-fit mx-auto">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center w-fit">
            {/* Step Icon */}
            {step.id < currentStep ? (
              <CheckCircle className="text-green-500 w-8 h-8" />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full">
                {step.id}
              </div>
            )}

            {/* Step Label */}
            <span className={`ml-2 text-sm ${step.id < currentStep ? "text-black font-semibold" : "text-gray-500"}`}>
              {step.label}
            </span>

            {/* Connector Line (only if not last step) */}
            {index < steps.length - 1 && <div className="flex-1 h-[2px] bg-gray-300 mx-2 w-32"></div>}
          </div>
        ))}
      </div>
      {/* STEPS */}
      <div className="flex-1 mt-10">
        <Suspense fallback={<div className="loading"/>}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/decor`} />
            <Route 
              path={`${match.url}/decor`} 
              render={(props) => <Decor {...props}/>}
            />
            <Route 
              path={`${match.url}/package`} 
              render={(props) => <Package {...props}/>}
            />
            <Route 
              path={`${match.url}/service`} 
              render={(props) => <Service {...props}/>}
            />
            <Route 
              path={`${match.url}/date-time`} 
              render={(props) => <DateTimePicker {...props}/>}
            />
          </Switch>
        </Suspense>
      </div>
      {/* Navigation */}
      <StepNavigation/>
    </div>
  );
}

const mapStateToProps = ({reservation}) => {
  const {step: currentStep} = reservation;
  return {currentStep};
};
export default connect(mapStateToProps, {})(Reserver);
