import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="w-full h-screen pt-[150px]">
      <div className="flex flex-col items-center justify-center mx-auto lg:w-[1220px] w-[343px] lg:gap-10">
        <AnimatedLongText text={"Looking for something?"} className="font-bold text-[40px]/[64px] lg:text-[52px]/[64px]" />
        <AnimatedLongText text={"The page you are looking for does not exist, or maybe it's still under development :D."} className=" text-2xl lg:text-3xl text-center" />

        <div className="border  h-14 lg:flex hidden justify-center items-center py-4 px-6 cursor-pointer rounded-[64px] hover:scale-110 transition duration-300">
          <Link to="/" className=" text-[16px]/[24px] ">
            <p className="bg-transparent  h-14 py-4 px-6 rounded-[64px]">Kembali ke beranda</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
