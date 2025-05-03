import React from "react";

export const CardDedication = ({ index, img, bgColor, title }) => {
  return (
    <div key={index} className="flex flex-col max-w-[400px] max-h-[280px] rounded-t-3xl">
      <img src={img} alt="dedikasi" className="max-w-[400px] max-h-[222px] rounded-t-3xl" />
      <div className="w-full flex justify-center items-center px-6 py-4 rounded-b-3xl" style={{ backgroundColor: bgColor }}>
        <h4 className="text-white">{title}</h4>
      </div>
    </div>
  );
};
