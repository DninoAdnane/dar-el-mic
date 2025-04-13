import React, {useState} from "react";
import "@/assets/css/components/package.css"

const Package = ({packageElemt, isClicked, handleClick}) => {


  return (
    <div className="col-12 col-sm-6 col-lg-4 px-1 px-sm-2 px-md-3 packages-box" style={{marginBottom: "20px"}}>
      <div 
        className={`p-[30px] px-[10px] rounded-[20px] mb-[20px] flex flex-col justify-between bg-[#e5e1e64d] min-h-[500px] max-w-[400px] items-stretch transition-transform 
                  duration-300 ease-in-out shadow-md cursor-default flex-1 ${isClicked ? "border-4 border-sky-400": "hover:scale-102 hover:shadow-lg"}`}>
        <div className="flex flex-col gap-4">
          <div className="package-first-part">
            <h2 className="package-title">{packageElemt.title}</h2>
            {packageElemt.subTitle && <h4 style={{fontWeight: '700', color: 'black'}}>{packageElemt.subTitle}</h4>}
            {packageElemt.detail && <p>{packageElemt.detail}</p>}
            {packageElemt.oldPrice && <div className="crossed-out">{packageElemt.oldPrice} DZD</div>}
            {packageElemt.price && <h4 style={{fontWeight: '700', color: "black"}}>{packageElemt.price?.toString()} DZD</h4>}
          </div>
          <div className="package-elements-container">
            <ul>
              {packageElemt.elements.map((elmt, idx) => (
                <li key={idx} className="text font-normal leading-7"><p>{elmt}</p></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="package-last-part">
          {packageElemt.tarif && <p style={{color: "black"}}><b>Tarif: </b>{packageElemt.tarif}</p>}
          <button 
            className="btn btn-primary btn-lg" 
            style={{alignSelf: "center"}}
            onClick={() => handleClick && handleClick()}
          >Sélectionner</button>
        </div>
      </div>
  </div>
  );
};

export default Package;