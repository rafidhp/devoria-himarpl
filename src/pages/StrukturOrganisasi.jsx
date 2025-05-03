import React from "react";
import { useState } from "react";

export const StrukturOrganisasi = () => {
  const [activeSection, setActiveSection] = useState("be");

  return (
    <div id="strukturOrganisasi" className="bg-white pt-[68px] flex flex-col items-center pb-[50px]">
      <div className="flex flex-col items-center max-w-[1053px] gap-4">
        <p className="text-8xl font-bold">Struktur Organisasi</p>
        <div className="max-w-[700px]">
          <p className="text-base/[31px] text-center text-[#404040]">
            HIMARPL memiliki dua badan yang memiliki perannya masing-masing.
            <b>Badan Eksekutif (BE)</b> merupakan Lembaga Eksekutif HIMARPL yang berperan dalam pelaksanaan kegiatan kemahasiswaan. Sedangkan <b>Dewan Perwakilan (DP)</b> merupakan Lembaga Legislatif yang berperan sebagai Dewan Perwakilan
            Mahasiswa.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-[1220px] my-16">
        <div
          onClick={() => setActiveSection("be")}
          className={`cursor-pointer flex items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg ${activeSection === "be" ? "bg-black" : "bg-white border-2"}`}
        >
          <p className={`font-semibold text-base/[24px] ${activeSection === "be" ? "text-white" : "text-black"}`}>Badan Eksekutif</p>
        </div>
        <div
          onClick={() => setActiveSection("dp")}
          className={`cursor-pointer flex items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg ${activeSection === "dp" ? "bg-black" : "bg-white border-2"}`}
        >
          <p className={`font-semibold text-base/[24px] ${activeSection === "dp" ? "text-white" : "text-black"}`}>Dewan Perwakilan</p>
        </div>
      </div>

      <div className="flex justify-center">
        {activeSection === "be" && <img src="/be.svg" alt="Badan Eksekutif" className="max-w-[1075px]" />}
        {activeSection === "dp" && <img src="/dp.svg" alt="Dewan Perwakilan" className="max-w-[440px]" />}
      </div>

      <div className="bg-[#E8E8E8] rounded-3xl px-6 py-4 mt-14 flex items-center justify-between gap-4">
        <div onClick={() => setActiveSection("be")} className={`cursor-pointer w-3 h-3 rounded-full ${activeSection === "be" ? "bg-[#4B4B4B]" : "bg-[#B1B1B1]"}`}></div>
        <div onClick={() => setActiveSection("dp")} className={`cursor-pointer w-3 h-3 rounded-full ${activeSection === "dp" ? "bg-[#4B4B4B]" : "bg-[#B1B1B1]"}`}></div>
      </div>
    </div>
  );
};
