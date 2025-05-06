import { Link } from "react-router-dom";
import "./home.css";
import { CardDedication } from "../components/CardDedication";
import { StrukturOrganisasi } from "./StrukturOrganisasi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";

export default function Home() {
  const textScrollDown = {
    writingMode: "vertical-rl",
    textOrientation: "upright",
  };

  const textStyle1 = {
    WebkitTextStroke: "2px white",
    color: "transparent",
  };
  const textStyle2 = {
    WebkitTextStroke: "2px #887300",
    color: "transparent",
    fontWeight: "700",
  };
  return (
    <>
      <div id="home" className="pt-8 bg-white">
        <div className="relative">
          <div className="flex lg:flex-row flex-col lg:gap-32 gap-4 lg:items-center items-start  lg:max-w-[1220px] lg:mx-[110px] mx-4">
            <div className="lg:max-w-[555px] flex flex-col gap-2">
              <p className="font-bold text-[40px]/[64px]">HIMARPL</p>
              <div className="bg-black p-2">
                <p className="font-bold text-[32px] text-white underline decoration-[#FFE867] decoration-2 underline-offset-8">Kabinet Devoria</p>
              </div>
            </div>

            <div className="lg:max-w-[580px] w-[343px]">
              <p className="text-base/[24px]">
                <b>Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025.
              </p>
            </div>
          </div>

          <div className="lg:mt-8 mt-6 relative lg:mb-[75px] mb-[48px]">
            <img src="/fullteam.jpeg" alt="Kabinet Devoria" loading="lazy" className="lg:w-[1220px] lg:mx-[110px] mx-4 w-[343px] rounded-3xl z-10" />

            <img src="/HIMARPL.svg" alt="HIMARPL" className="lg:w-[1210px] w-[313px] absolute lg:top-[550px] lg:left-[130px] top-[157px] left-[33px] z-20" />
            <p style={textScrollDown} className="absolute lg:text-[16px] text-[8px] lg:tracking-[28px] tracking-[8px] top-0 lg:left-11 left-0 font-bold">
              scrolldown
            </p>
            <p style={textScrollDown} className="absolute lg:text-[16px] text-[8px] lg:tracking-[28px] lg:-bottom-[28px] tracking-[8px] bottom-0 lg:right-11 right-0 font-bold">
              scrolldown
            </p>
          </div>
        </div>
      </div>

      <Sponsor />
      <Dedication />

      <Marquee className="bg-black w-full gap-4 flex justify-center items-center flex-row">
        {[0, 1, 2, 3].map((i) => (
          <p key={i} style={i % 2 === 1 ? textStyle1 : {}} className="lg:text-8xl/tight text-[64px] font-semibold text-white">
            #NEWS
          </p>
        ))}
      </Marquee>

      <Berita />

      <div className="bg-[#ffe867] w-full flex justify-center lg:flex-row flex-col items-center lg:px-[58px] py-[45px] lg:gap-[42px] gap-[28px] z-10 ">
        <Marquee className="lg:!hidden w-full flex flex-row justify-between  items-center !overflow-visible">
          {[0, 1, 2, 3].map((i) => (
            <div className="relative " key={i}>
              <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
                <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">VISI</p>
              </div>
              <div className="bg-[#ffe867] absolute z-10 w-2 lg:block hidden h-5 top-10 -left-1"></div>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
                VISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
                VISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
                VISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
                VISI
              </p>
            </div>
          ))}
        </Marquee>

        <div className="relative lg:block hidden">
          <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
            <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">VISI</p>
          </div>
          <div className="bg-[#ffe867] absolute z-10 w-2 lg:block hidden h-5 top-10 -left-1"></div>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
            VISI
          </p>
        </div>

        <img src="/Group 247.svg" alt="HIMARPL" className="lg:w-[718px] w-[164px]" />

        <Marquee className="lg:!hidden w-full flex flex-row justify-between  items-center !overflow-visible" direction="right">
          {[0, 1, 2, 3].map((i) => (
            <div className="relative " key={i}>
              <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
                <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">MISI</p>
              </div>
              <div className="bg-[#ffe867] absolute z-10 w-2 lg:block hidden h-5 top-10 -left-1"></div>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
                MISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
                MISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
                MISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
                MISI
              </p>
            </div>
          ))}
        </Marquee>
        <div className="relative lg:block hidden">
          <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
            <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">MISI</p>
          </div>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
            MISI
          </p>
        </div>
      </div>

      <VisiMisi />

      <StrukturOrganisasi />

      <Sejarah />

      <div id="contact" className="bg-[url(/rectangle498.png)] w-full pt-[110px] bg-cover bg-center flex flex-row items-start gap-4 justify-center">
        <div className="flex flex-row items-end h-full">
          <img src="/Maskot.svg" alt="maskot" className="max-w-[580px]" />
        </div>

        <div className="flex flex-col justify-center pt-[210px] h-full gap-10">
          <div className="flex flex-col gap-4 max-w-[760px]">
            <p className="font-semibold text-8xl">Hubungi Kami</p>
            <p className="text-base/[24px]">Jika Anda memiliki pertanyaan, masukan, atau ingin mengetahui lebih lanjut tentang layanan kami, jangan ragu untuk menghubungi kami.</p>
          </div>

          <div className="cursor-pointer flex items-center justify-center px-6 py-4 rounded-2xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg bg-black w-[231px]">
            <p className="font-semibold text-white">Pelajari Selengkapnya</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Sponsor() {
  const sponsors = [
    { src: "/dicoding.svg", alt: "Dicoding", maxWidth: "178px", minWidth: "56px" },
    { src: "/kahf.svg", alt: "Kahf", maxWidth: "135px", minWidth: "56px" },
    { src: "/allobank.svg", alt: "Allobank", maxWidth: "163px", minWidth: "56px" },
    { src: "/menyala.svg", alt: "Me.nyala", maxWidth: "130px", minWidth: "56px" },
    { src: "/ruru.svg", alt: "Ruru snack", maxWidth: "133px", minWidth: "56px" },
  ];
  return (
    <div id="sponsor" className="bg-[#FFE867] w-full z-20  py-[20px]">
      <div className=" flex flex-col justify-center items-center">
        <h4 className="text-[#806D00] text-2xl">Sponsor dan Mitra Kami</h4>

        <div className="flex items-center flex-row lg:gap-[54px] gap-4 h-auto justify-between lg:w-[1255px] w-[327px] mt-4">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center ">
              <img src={sponsor.src} alt={sponsor.alt} className={` h-auto`} style={{ width: "100%", maxWidth: sponsor.maxWidth, minWidth: sponsor.minWidth }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dedication() {
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

  return (
    <div id="dedikasi" className="bg-[#10316B]  w-full lg:pt-[123px] pt-[68px] z-10 relative flex flex-col justify-center items-center dedikasi lg:pb-[96px] pb-[84px]">
      <img src="/Vector 67.svg" alt="vector" className="lg:w-[237px] w-[190px] absolute -top-[90px] right-0" />
      <img src="/Group 245.svg" alt="pixel" className="lg:w-[672px] w-[300px] absolute top-[280px] -z-10" />
      <img src="/Vector 50.svg" alt="vector" className="lg:w-[306px] w-[250px] absolute bottom-0 left-0 -z-10" />
      <div className="flex flex-col justify-center items-center lg:gap-8 gap-6 lg:w-[619px] w-[343px]">
        <h1 className="lg:text-8xl/[54px] text-white text-center text-[64px]/[72px]">Dedikasi Kami</h1>
        <p className="text-base/[24px] text-white text-center">Di bawah naungan Kabinet Devoria, HIMARPL UPI berkomitmen untuk menjadi wadah terbaik dalam mengembangkan potensi akademik, profesional, dan sosial seluruh anggota.</p>
      </div>

      <div className="lg:flex hidden flex-row items-center gap-10 justify-between lg:w-[1280px] lg:mt-[103px] mt-8 z-10 overflow-x-scroll">
        {dedikasiItems.map((item, index) => (
          <CardDedication key={index} index={index} img={item.img} bgColor={item.bgColor} title={item.title} />
        ))}
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        className="lg:!hidden w-[343px] z-10 px-4 lg:mt-[103px] mt-8"
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {dedikasiItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto" // biar item menyesuaikan ukuran kontennya
          >
            <CardDedication index={index} img={item.img} bgColor={item.bgColor} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-[#ffe867] lg:w-[160px] w-[343px] h-14 flex justify-center items-center py-4 px-6 rounded-[64px] lg:mt-20 mt-9 z-10">
        <Link to="/dedikasi" className="text-[#806D00] text-[20px]/[24px] ">
          <h4 className="bg-transparent w-[160px] h-14 rounded-[64px] py-4 px-6">Lihat Semua</h4>
        </Link>
      </div>
    </div>
  );
}

function Berita() {
  return (
    <div id="berita" className="bg-white lg:py-20 py-10 flex flex-col items-center justify-between">
      <div className="relative flex lg:flex-row flex-col-reverse items-center justify-between max-w-[1220px] lg:gap-20 gap-6">
        <div className="border w-[343px] cursor-pointer bg-white h-14 flex lg:hidden justify-center items-center py-4 px-6 rounded-[64px] z-10 mb-10">
          <Link to="/berita" className=" text-[16px]/[24px] ">
            <p className=" w-[206px] h-14 py-4 px-6 rounded-[64px]">Lihat Semua Berita</p>
          </Link>
        </div>

        <img src="/berita.jpg" alt="Berita" className="lg:w-[576px] lg:h-[612px] w-[343px] h-[200px] object-cover rounded-3xl" />

        <div className="flex flex-col justify-center lg:w-[580px] w-[343px]">
          <img src="/Group 241.svg" alt="pixel" className="absolute max-w-[72px] lg:top-0 top-40 right-0" />
          <img src="/Group 252.svg" alt="pixel" className="absolute max-w-[303px] bottom-0 right-5 " />
          <p className="lg:text-[64px]/[72px] text-[40px] min-w-[343px] font-semibold">
            Akses Berita <br /> Aktual RPL <br />
            di Sini.
          </p>
          <p className="mt-6 lg:mb-10 min-w-[343px]">
            <b> Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025.
          </p>
          <div className="border w-[206px] h-14 lg:flex hidden justify-center items-center py-4 px-6 cursor-pointer rounded-[64px] ">
            <Link to="/berita" className=" text-[16px]/[24px] ">
              <p className="bg-transparent w-[206px] h-14 py-4 px-6 rounded-[64px]">Lihat Semua Berita</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisiMisi() {
  return (
    <div id="visiMisi" className="bg-[#10316B] w-full  lg:pt-[68px] pt-[42px] gap-[68px] flex flex-col justify-center items-center relative z-0">
      <img src="/Group 251.svg" alt="pixel" className="lg:w-[181px] w-[64px] absolute lg:-top-7 top-0 right-0 -z-20" />
      <img src="/Group 250.svg" alt="pixel" className="lg:w-[207px] w-[80px] absolute bottom-0 left-0 -z-20" />

      <div className="flex flex-col lg:rounded-3xl pb-4 rounded-lg lg:w-[1220px] w-[343px] gap-4 lg:h-[300px]  lg:border-8 border-2 border-[#FF4B4B]">
        <div className="flex flex-row items-center justify-between bg-[#FF4B4B] lg:gap-96 lg:rounded-b-3xl rounded-b-lg rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2">
          <h4 className="text-white lg:text-[40px] text-base">Visi</h4>

          <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#B50000] rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#B50000] rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#B50000] rounded-full"></div>
          </div>
        </div>

        <p className="text-white lg:text-[24px]/[40px] lg:mx-6 mx-4 text-base/[24px]">
          Menjadi himpunan mahasiswa yang aktif, inovatif, dan kolaboratif dalam mengembangkan potensi akademik, profesional, dan sosial mahasiswa Rekayasa Perangkat Lunak UPI, serta berkontribusi positif bagi masyarakat dan dunia industri.
        </p>
      </div>
      <div className="flex flex-col lg:rounded-3xl rounded-lg lg:w-[1220px] w-[343px] gap-4 lg:h-[460px] lg:pb-5 pb-4 lg:border-8 border-2 border-[#5573FF] lg:mb-[96px] mb-10 bg-[#10316B]">
        <div className="flex flex-row items-center justify-between bg-[#5573FF] lg:gap-96 lg:rounded-b-3xl rounded-b-lg rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2">
          <h4 className="text-white lg:text-[40px] text-base">Misi</h4>

          <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#001DA7] rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#001DA7] rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#001DA7] rounded-full"></div>
          </div>
        </div>

        <ul>
          <li>
            <p className="text-white lg:text-[24px]/[40px] text-base/[40px] mx-6">• Menyelenggarakan program kerja yang mendukung pengembangan kompetensi teknis dan soft skills mahasiswa.</p>
          </li>
          <li>
            <p className="text-white lg:text-[24px]/[40px] text-base/[40px] mx-6">• Membangun budaya organisasi yang profesional, adaptif, dan berintegritas.</p>
          </li>
          <li>
            <p className="text-white lg:text-[24px]/[40px] text-base/[40px] mx-6">• Menjadi wadah aspirasi dan advokasi bagi mahasiswa Rekayasa Perangkat Lunak.</p>
          </li>
          <li>
            <p className="text-white lg:text-[24px]/[40px] text-base/[40px] mx-6">• Meningkatkan kolaborasi dengan berbagai pihak, termasuk institusi pendidikan, industri, dan masyarakat.</p>
          </li>
          <li>
            <p className="text-white lg:text-[24px]/[40px] text-base/[40px] mx-6">• Melaksanakan kegiatan sosial dan pengabdian kepada masyarakat yang relevan dengan bidang keilmuan.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Sejarah() {
  const cabinets = [
    { src: "/inisiator.png", alt: "Inisiator", name: "Inisiator", year: "2020" },
    { src: "/inspira.png", alt: "Inspira", name: "Inspira", year: "2021" },
    { src: "/explora.png", alt: "Explora", name: "Explora", year: "2022" },
    { src: "/manifest.png", alt: "Manifest", name: "Manifest", year: "2023" },
    { src: "/ascendia.png", alt: "Ascendia", name: "Ascendia", year: "2024" },
    { src: "/devoria.png", alt: "Devoria", name: "Devoria", year: "2025" },
  ];
  return (
    <div id="journey" className="bg-[#10316B] w-full  items-center gap-[135px] flex flex-col justify-center pt-[68px]">
      <h1 className="text-white text-8xl">Perjalanan HIMARPL</h1>

      <div className="w-full h-[600px] flex flex-col items-center justify-center relative bg-[#0B409C] gap-14">
        <img src="/Group 253.svg" alt="pixel" className="absolute max-w-[259px] -top-28 left-0" />
        <img src="/Group 253.svg" alt="pixel" className="absolute max-w-[259px] -top-28 right-0 scale-x-[-1]" />
        <div className="bg-[#FFE867] h-2 w-[1084px]"></div>
        <div className="bg-[#F2F7FF] w-full h-[400px] flex items-center justify-center">
          <div className="w-[1312px] flex items-center justify-between">
            {cabinets.map((cabinet, index) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center gap-[64px]">
                  <img src={cabinet.src} alt={cabinet.alt} className="max-h-[128px] w-full" />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="font-semibold text-2xl">{cabinet.name}</p>
                    <h1 className="text-[#4B4B4B] font-normal">{cabinet.year}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="w-full h-2 "
          style={{
            borderTop: "4px dashed transparent",
            borderImage: "repeating-linear-gradient(to right, #FFE867 0 60px, transparent 60px 80px)",
            borderImageSlice: 1,
          }}
        ></div>
      </div>
    </div>
  );
}
