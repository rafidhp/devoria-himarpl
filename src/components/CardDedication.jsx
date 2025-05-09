import React from "react";

export const CardDedication = ({ index, img, bgColor, title }) => {
  return (
    <div key={index} className="flex flex-col lg:w-[400px] w-[343px] h-[190px] lg:h-[280px] lg:rounded-t-3xl rounded-t-2xl">
      <img src={img} alt="dedikasi" className="lg:w-[400px] w-[343px] h-[150px] lg:h-[222px] lg:rounded-t-3xl rounded-t-2xl object-cover" />
      <div className="w-full flex justify-center items-center px-6 py-3 lg:rounded-b-3xl rounded-b-2xl" style={{ backgroundColor: bgColor }}>
        <h4 className="text-white lg:text-base/[24px] text-[10px]/[16px]">{title}</h4>
      </div>
    </div>
  );
};
