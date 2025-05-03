import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
export default function MainLayout() {
  const location = useLocation(),
    currentPath = location.pathname.split("/")[1];

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isActive = (path) => currentPath === path;

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="flex flex-col justify-center items-center mt-[68px]">
      <div
        className={`sticky top-8 z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-[115px]"
        } bg-white flex justify-between items-center max-w-[1220px] mx-[110px] border border-[#A7A7A7] rounded-2xl gap-96  drop-shadow(0px_4px_12px_rgba(0,0,0,0.04))`}
      >
        <NavLink
          to={"/"}
          onClick={() => {
            if (currentPath === "") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img src="/logo hima.png" alt="HIMARPL" className="max-w-[240px] max-h-[70px]" />
        </NavLink>

        <nav className="flex flex-row px-6 py-4 gap-6 items-center justify-between">
          <NavLink
            to={"/"}
            onClick={() => {
              if (currentPath === "") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={`${currentPath === "" ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}
          >
            Beranda
          </NavLink>
          <NavLink to={"/dedikasi"} className={`${currentPath === "dedikasi" ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}>
            Dedikasi
          </NavLink>
          <NavLink to={"/berita"} className={`${currentPath === "berita" ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}>
            Berita
          </NavLink>
          <NavLink to={"/struktur"} className={`${currentPath === "struktur" ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}>
            Struktur Organisasi
          </NavLink>
          <NavLink to={"/contacts"} className={`${currentPath === "contacts" ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}>
            Contacts
          </NavLink>
          <div className="relative" ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer ${["be", "dp"].includes(currentPath) ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
              About Us
            </div>
            {isOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md p-2 z-50">
                <NavLink to="/be" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("be") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                  BE
                </NavLink>
                <NavLink to="/dp" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("dp") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                  DP
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
      <Outlet />

      <footer className="w-full bg-[#232323] pb-5 pt-14 px-[72px] flex flex-col">
        <div className="flex flex-row items-center justify-between border-b border-[#B2B2B2] pb-5">
          <div className="flex flex-col justify-between h-[194px]">
            <img src="/logo hima.png" alt="HIMARPL" className="max-w-[200px]" />
            <div className="max-w-[416px]">
              <p className="text-white text-base/[24px]">Empowering you with knowledge to make informed health decisions. (Dummy) </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-4">
                <Icon icon="mdi:email-outline" className="text-white w-6 h-6" />
                <a href="mailto:himarpl@upi.edu" className="text-white text-base/[24px]">
                  himarpl@upi.edu
                </a>
              </div>
              <div className="flex flex-row gap-4">
                <Icon icon="mingcute:phone-line" className="text-white w-6 h-6" />
                <p className="text-white text-base/[24px]">+192 666 777</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-4">
              <NavLink to="/blogs" className="text-[#6C6C6C] font-medium">
                Other blogs
              </NavLink>
              <NavLink to="/download" className="text-[#6C6C6C] font-medium">
                Download
              </NavLink>
              <NavLink to="/api" className="text-[#6C6C6C] font-medium">
                API
              </NavLink>
              <NavLink to="/integration" className="text-[#6C6C6C] font-medium">
                Integrations
              </NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <NavLink to="/partner" className="text-[#6C6C6C] font-medium">
                Partner
              </NavLink>
              <NavLink to="/writer" className="text-[#6C6C6C] font-medium">
                Writer
              </NavLink>
              <NavLink to="/review" className="text-[#6C6C6C] font-medium">
                Customer Review
              </NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <NavLink to="/be" className="text-[#6C6C6C] font-medium">
                About Us
              </NavLink>
              <NavLink to="/privacy" className="text-[#6C6C6C] font-medium">
                Privacy Policy
              </NavLink>
              <NavLink to="/terms" className="text-[#6C6C6C] font-medium">
                Terms & Conditions
              </NavLink>
            </div>
            <div className="flex flex-col gap-4">
              <NavLink to="/help" className="text-[#6C6C6C] font-medium">
                Help
              </NavLink>
              <NavLink to="/resources" className="text-[#6C6C6C] font-medium">
                Resources
              </NavLink>
              <NavLink to="/contacts" className="text-[#6C6C6C] font-medium">
                Contacts
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between mt-5">
          <p className="text-[#747474] text-base/[24px]">&copy; Copyright 2025 HIMARPL all rights reserved.</p>
          <div className="flex flex-row gap-4">
            <NavLink to="https://www.instagram.com/himarpl" target="_blank">
              <Icon icon="mdi:instagram" className="text-[#747474] w-4 h-4" />
            </NavLink>
            <NavLink to="https://www.tiktok.com/@himarpl" target="_blank">
              <Icon icon="ic:baseline-tiktok" className="text-[#747474] w-4 h-4" />
            </NavLink>
            <NavLink to="https://open.spotify.com/show/3U3iuQcBYyzC5c13UieYFQ?si=ac651a8e3cff407e" target="_blank">
              <Icon icon="mdi:spotify" className="text-[#747474] w-4 h-4" />
            </NavLink>
            <NavLink to="https://www.youtube.com/@himarpl" target="_blank">
              <Icon icon="mdi:youtube" className="text-[#747474] w-4 h-4" />
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
