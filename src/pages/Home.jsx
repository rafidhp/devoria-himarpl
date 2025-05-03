import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  const textScrollDown = {
    writingMode: "vertical-rl",
    textOrientation: "upright",
  };

  const sponsors = [
    { src: "/dicoding.svg", alt: "Dicoding", maxWidth: "178px" },
    { src: "/kahf.svg", alt: "Kahf", maxWidth: "135px" },
    { src: "/allobank.svg", alt: "Allobank", maxWidth: "163px" },
    { src: "/menyala.svg", alt: "Me.nyala", maxWidth: "130px" },
    { src: "/ruru.svg", alt: "Ruru snack", maxWidth: "133px" },
  ];

  const dedikasiItems = [
    {
      img: "/dedikasi1.jpg",
      title: "RPL Berbagi",
      bgColor: "#FF4B4B",
    },
    {
      img: "/dedikasi 3.png",
      title: "RPL Peduli",
      bgColor: "#FF7F11",
    },
    {
      img: "/dedikasi2.jpg",
      title: "RPL Berbagi",
      bgColor: "#5573FF",
    },
  ];

  const textStyle1 = {
    WebkitTextStroke: "2px white", // Stroke width and color
    color: "transparent",
  };
  return (
    <>
      <div id="home" className="pt-8">
        <div className="relative">
          <div className="flex flex-row gap-32 items-center  max-w-[1220px] mx-[110px]">
            <div className="max-w-[555px] flex flex-col gap-2">
              <h1 className="font-bold text-[64px]/[64px]">HIMARPL</h1>
              <div className="bg-black p-2">
                <h1 className="font-bold text-[64px]/[64px] text-white underline decoration-[#FFE867] decoration-2 underline-offset-8">Kabinet Devoria</h1>
              </div>
            </div>

            <div className="max-w-[580px]">
              <p className="text-base/[24px]">
                <b>Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025.
              </p>
            </div>
          </div>

          <div className="mt-8 relative mb-[75px]">
            <img src="/fullteam.jpeg" alt="Kabinet Devoria" className="max-w-[1220px] mx-[110px] rounded-3xl z-10" />

            <img src="/HIMARPL.svg" alt="HIMARPL" className="max-w-[1210px]  absolute top-[550px] left-[130px] z-20" />
            <p style={textScrollDown} className="absolute text-[16px] tracking-[28px] top-0 left-11 font-bold">
              scrolldown
            </p>
            <p style={textScrollDown} className="absolute text-[16px] tracking-[28px] -bottom-[28px] right-11 font-bold">
              scrolldown
            </p>
          </div>
        </div>
      </div>

      <div id="sponsor" className="bg-[#FFE867] w-full z-20  py-[20px]">
        <div className=" flex flex-col justify-center items-center">
          <h4 className="text-[#806D00] text-2xl">Sponsor dan Mitra Kami</h4>

          <div className="flex items-center flex-row gap-[54px] justify-between max-w-[1255px]">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex items-center px-[30px]">
                <img src={sponsor.src} alt={sponsor.alt} style={{ maxWidth: sponsor.maxWidth }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="dedikasi" className="bg-[#10316B] h-[1000px] w-full pt-[123px] z-10 relative flex flex-col justify-center items-center dedikasi">
        <img src="/Vector 67.svg" alt="vector" className="max-w-[391px] absolute -top-[90px] right-0" />
        <img src="/Group 245.svg" alt="pixel" className="max-w-[672px] absolute top-[280px] -z-10" />
        <img src="/Vector 50.svg" alt="vector" className="max-w-[326px] absolute bottom-0 left-0 -z-10" />
        <div className="flex flex-col justify-center items-center gap-8 max-w-[619px]">
          <h1 className="text-8xl/[54px] text-white">Dedikasi Kami</h1>
          <p className="text-base/[24px] text-white text-center">Di bawah naungan Kabinet Devoria, HIMARPL UPI berkomitmen untuk menjadi wadah terbaik dalam mengembangkan potensi akademik, profesional, dan sosial seluruh anggota.</p>
        </div>

        <div className="flex flex-row items-center gap-10 justify-between max-w-[1280px] mt-[103px]">
          {dedikasiItems.map((item, index) => (
            <div key={index} className="flex flex-col max-w-[400px] max-h-[280px] rounded-t-3xl">
              <img src={item.img} alt="dedikasi" className="max-w-[400px] max-h-[222px] rounded-t-3xl" />
              <div className="w-full flex justify-center items-center px-6 py-4 rounded-b-3xl" style={{ backgroundColor: item.bgColor }}>
                <h4 className="text-white">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#ffe867] w-[160px] h-14 flex justify-center items-center py-4 px-6 rounded-[64px] mt-20 z-10">
          <Link to="/dedikasi" className="text-[#806D00] text-[20px]/[24px] ">
            <h4>Lihat Semua</h4>
          </Link>
        </div>
      </div>

      <div className="bg-black w-full gap-4 flex justify-center items-center flex-row ">
        <p className="text-8xl/tight text-white font-semibold"># NEWS</p>
        <p style={textStyle1} className="text-8xl/tight  font-semibold">
          # NEWS
        </p>
        <p className="text-8xl/tight text-white font-semibold"># NEWS</p>
      </div>
    </>
  );
}
