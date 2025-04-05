import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { setDecorId } from "@/redux/reservation/actions";
import MainFetch from "@/call_helpers/mainFetch";
import { transformKeysToCamelCaseArray } from "@/helpers/Utils";
import { GET_DECORS } from "call_helpers/constant_url";



const Decor = ({ match, setSelectedDecor, decor }) => {

  const [decorations, setDecorations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

  useEffect(async () => {
    const response = await new MainFetch(GET_DECORS, null, "GET").fetchCall;
    if (response.error) {
        console.log(error);
        return;
    }
    const data = transformKeysToCamelCaseArray(response.response);
    setDecorations(data);

    //set selected decor
    if (!decor) return;
    const decorId = data.findIndex(dcr => dcr.public_id === decor);
    setSelectedId(decorId);
  }, []);

  const selectElement = (id) => {
    setSelectedId(id);
    setSelectedDecor(decorations[id].public_id)
  };

  return (
    <div className="flex flex-wrap lg:px-20">
      {decorations.map((decor, idx) => (
        <div
          key={idx}
          className={`w-full md:w-1/2 flex flex-col justify-center items-center p-4 px-5`}
        >
          <h3 className="!font-bold mb-3">{decor.title}</h3>
          <Link
            to="/#decors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`max-w-[500px] aspect-[4/3] bg-gray-200 transition-transform duration-300 rounded-[10px] ${selectedId === idx ? "border-4 border-sky-400" : "hover:scale-102 "}`}>
              <img 
                src={`/assets/img/landing-page/${decor.picture}`} 
                alt={decor.title} 
                className="w-full h-full object-cover  rounded-[8px]"
                />
            </div>
          </Link>
          <button 
            className="px-5 py-2 border !border-gray-400 !rounded-full text-black font-bold hover:bg-gray-200 transition duration-300 mt-4"
            onClick={() => selectElement(idx)}
            >
            Sélectionner
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({reservation}) => {
  const {decor} = reservation;
  return {decor};
};

export default connect(mapStateToProps, {
  setSelectedDecor: setDecorId,
})(Decor);