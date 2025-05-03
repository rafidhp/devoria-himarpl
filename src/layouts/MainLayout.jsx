import { Outlet, NavLink, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation(),
    currentPath = location.pathname.split("/")[1];
  return (
    <div className="flex flex-col justify-center items-center mt-[68px]">
      <div className="bg-white flex justify-between items-center max-w-[1220px] mx-[110px] border border-[#A7A7A7] rounded-2xl gap-96 sticky top-0 z-50  drop-shadow(0px_4px_12px_rgba(0,0,0,0.04))">
        <img src="/logo hima.png" alt="HIMARPL" className="max-w-[240px] max-h-[70px]" />

        <nav className="flex flex-row px-6 py-4 gap-6 items-center justify-between">
          <NavLink to={"/"} className={`${currentPath === "" ? "text-[#10316B] font-bold" : "text-[#9C9C9C]"} `}>
            Beranda
          </NavLink>
          <NavLink to={"/dedikasi"} className={`${currentPath === "dedikasi" ? "text-[#10316B] font-bold" : "text-[#9C9C9C]"} `}>
            Dedikasi
          </NavLink>
          <NavLink to={"/berita"} className={`${currentPath === "berita" ? "text-[#10316B] font-bold" : "text-[#9C9C9C]"} `}>
            Berita
          </NavLink>
          <NavLink to={"/struktur"} className={`${currentPath === "struktur" ? "text-[#10316B] font-bold" : "text-[#9C9C9C]"} `}>
            Struktur Organisasi
          </NavLink>
          <NavLink to={"/contacts"} className={`${currentPath === "contacts" ? "text-[#10316B] font-bold" : "text-[#9C9C9C]"} `}>
            Contacts
          </NavLink>
          <button>About Us</button>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
