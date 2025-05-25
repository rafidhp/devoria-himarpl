import { Link, useLocation } from "react-router-dom";

export const CardKepengurusan = ({ img, department, nama, deptType }) => {
  const location = useLocation();
  const linkRoute = `/${deptType}/${department.toLowerCase()}`;
  const isCurrentRoute = location.pathname === linkRoute;

  return (
    <div className="flex flex-col gap-6 lg:max-h-[676px] lg:w-[400px]">
      <div className="flex flex-col w-full h-fit bg-[#141414] rounded-3xl items-center px-8 py-6 gap-6">
        <img src="/himarpl/Group 247.svg" alt="himarpl" className="w-[196px] " />
        <div className="w-full flex flex-col justify-center items-center rounded-2xl bg-white">
          <img src={img} alt="kepengurusan" className="w-fill  rounded-t-2xl object-cover" loading="lazy" decoding="async" />
          <div className="bg-[url(/bg/Bg-Fit-Low.png)] bg-cover flex flex-col justify-center items-center w-full h-[60px] rounded-b-2xl">
            <h4 className="text-black text-4xl font-extrabold">{department}</h4>
          </div>
        </div>
        <div className="flex flex-row gap-5 bg-[#141414]  justify-between items-center w-full h-fit">
          {nama && (
            <div className="w-[170px] items-start min-h-[50px]">
              <h2 className="text-white text-xl font-medium">{nama}</h2>
            </div>
          )}
          <div className={`${location.pathname === "/be" || location.pathname === "/dp" ? "hidden" : "flex"} flex flex-row gap-3 `}>
            <img src="/icons/instagram.svg" alt="instagram" />
            <img src="/icons/github-logo.svg" alt="github" />
            <img src="/icons/profile.svg" alt="profile" />
          </div>
        </div>
      </div>
      {!isCurrentRoute && (
        <div className="flex flex-col justify-center items-center w-full hover:scale-105 transition-all duration-300">
          <Link to={linkRoute} className="bg-transparent w-full h-[60px] rounded-2xl border-2 border-black">
            <p className="flex font-medium justify-center items-center w-full h-full">Lihat Program Kerja</p>
          </Link>
        </div>
      )}
    </div>

    // <div className="lg:w-[400px] w-[343px] h-fit flex flex-col gap-6">
    //   <div className="bg-black rounded-3xl flex flex-col items-center lg:gap-6 gap-5 lg:px-8 px-6 lg:py-6 py-5">
    //     <img src="/himarpl/Group 247.svg" alt="himarpl" className="lg:w-[196px] w-[168px]" />
    //     <div className="lg:rounded-2xl rounded-xl lg:w-[339px] w-[291px] flex flex-col justify-center items-center lg:h-[436px] h-[374px]">
    //       <img src={img} alt="kepengurusan" className="w-fill  rounded-t-2xl object-cover " loading="lazy" decoding="async" />
    //       <div className="bg-[url(/bg/Bg-Fit-Low.png)] bg-cover flex flex-col justify-center items-center w-full lg:h-[65px] h-[55px] rounded-b-2xl">
    //         <h4 className="text-black lg:text-[40px] text-[34px]">{department}</h4>
    //       </div>
    //     </div>

    //     <div className="flex flex-row bg-[#141414]  justify-between items-center w-full h-fit">
    //       {nama && (
    //         <div className="w-[170px] items-start min-h-[50px]">
    //           <h2 className="text-white lg:text-xl text-[16px] font-medium">{nama}</h2>
    //         </div>
    //       )}
    //       <div className={`${location.pathname === "/be" || location.pathname === "/dp" ? "hidden" : "flex"} flex flex-row gap-3 `}>
    //         <img src="/icons/instagram.svg" alt="instagram" />
    //         <img src="/icons/github-logo.svg" alt="github" />
    //         <img src="/icons/profile.svg" alt="profile" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
