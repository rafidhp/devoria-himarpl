import React from "react";
import { Link } from "react-router-dom";
import AnimatedText from "../components/AnimatedText";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedImage from "../components/AnimatedImage";

export const Contacts = () => {
  return (
    <div
      id="contact"
      className={`bg-[url(/ornaments/rectangle498.png)] w-full lg:pt-[110px] pt-10 px-4 bg-cover bg-center flex lg:flex-row flex-col-reverse lg:items-start items-center lg:gap-4 gap-6 justify-center lg:pb-0 pb-[64px] ${
        location.pathname === "/contact" ? "-mt-[135px] pt-32" : "mt-0"
      }`}
    >
      <div className="cursor-pointer lg:hidden flex items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg bg-black w-[343px]">
        <Link to="/contact/submit">
          <p className="font-semibold text-white">Pelajari Selengkapnya</p>
        </Link>
      </div>
      <div className=" flex-row items-end h-full flex">
        <AnimatedImage src="/himarpl/Maskot2.svg" alt="maskot" className="lg:w-[580px] w-[240px]" animationType="slideRight" />
      </div>

      <div className="flex flex-col justify-center lg:pt-[210px] h-full gap-10">
        <div className="flex flex-col gap-4 lg:w-[760px] w-[343px]">
          <AnimatedLongText className="font-semibold lg:text-8xl text-[40px] flex  lg:pt-0 pt-[50px]" text="Hubungi Kami" />
          {/* <p className="font-semibold lg:text-8xl text-[64px] flex  lg:pt-0 pt-[110px]">Hubungi Kami</p> */}
          {/* <p className="font-semibold lg:hidden text-[64px] ">Hubungi Kami</p> */}

          <AnimatedLongText className="text-base/[24px]" text="Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui lebih lanjut tentang layanan kami, jangan ragu untuk menghubungi kami." />
          {/* <p className="text-base/[24px]">Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui lebih lanjut tentang layanan kami, jangan ragu untuk menghubungi kami.</p> */}
        </div>

        <div className="cursor-pointer lg:flex hidden items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg bg-black w-[231px]">
          <Link to="/contact/submit">
            <p className="font-semibold text-white">Pelajari Selengkapnya</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
