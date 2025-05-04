import { Link } from "react-router-dom";
import "./home.css";
import { CardDedication } from "../components/CardDedication";
import { StrukturOrganisasi } from "./StrukturOrganisasi";
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
    fontSize: "128px",
    lineHeight: "180px",
    fontWeight: "700",
  };
  return (
    <>
      <div id="home" className="pt-8 bg-white">
        <div className="relative">
          <div className="flex flex-row gap-32 items-center  max-w-[1220px] mx-[110px]">
            <div className="max-w-[555px] flex flex-col gap-2">
              <p className="font-bold text-[56px]/[64px]">HIMARPL</p>
              <div className="bg-black p-2">
                <p className="font-bold text-[56px]/[64px] text-white underline decoration-[#FFE867] decoration-2 underline-offset-8">Kabinet Devoria</p>
              </div>
            </div>

            <div className="max-w-[580px]">
              <p className="text-base/[24px]">
                <b>Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025.
              </p>
            </div>
          </div>

          <div className="mt-8 relative mb-[75px]">
            <img src="/fullteam.jpeg" alt="Kabinet Devoria" loading="lazy" className="max-w-[1220px] mx-[110px] rounded-3xl z-10" />

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

      <Sponsor />
      <Dedication />

      <div className="bg-black w-full gap-4 flex justify-center items-center flex-row ">
        <p className="text-8xl/tight text-white font-semibold"># NEWS</p>
        <p style={textStyle1} className="text-8xl/tight  font-semibold">
          # NEWS
        </p>
        <p className="text-8xl/tight text-white font-semibold"># NEWS</p>
      </div>

      <Berita />

      <div className="bg-[#ffe867] w-full flex justify-center items-center px-[58px] py-[45px] gap-[42px] z-10 overflow-clip">
        <div className="relative ">
          <div className="bg-[#ffe867] h-[110px] flex items-center z-10">
            <p className="text-[#886D00] text-[128px]/[180px] font-bold">VISI</p>
          </div>
          <div className="bg-[#ffe867] absolute z-10 w-2 h-5 top-10 -left-1"></div>
          <p style={textStyle2} className="absolute -top-[69px] -z-10">
            VISI
          </p>
          <p style={textStyle2} className="absolute -top-[60px] -z-10">
            VISI
          </p>
          <p style={textStyle2} className="absolute -top-1 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="absolute top-1 -z-10">
            VISI
          </p>
        </div>

        <img src="/Group 247.svg" alt="HIMARPL" className="max-w-[718px]" />

        <div className="relative ">
          <div className="bg-[#ffe867] h-[110px] flex items-center z-10">
            <p className="text-[#886D00] text-[128px]/[180px] font-bold">MISI</p>
          </div>
          <p style={textStyle2} className="absolute -top-[69px] -z-10">
            MISI
          </p>
          <p style={textStyle2} className="absolute -top-[60px] -z-10">
            MISI
          </p>
          <p style={textStyle2} className="absolute -top-1 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="absolute top-1 -z-10">
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
    { src: "/dicoding.svg", alt: "Dicoding", maxWidth: "178px" },
    { src: "/kahf.svg", alt: "Kahf", maxWidth: "135px" },
    { src: "/allobank.svg", alt: "Allobank", maxWidth: "163px" },
    { src: "/menyala.svg", alt: "Me.nyala", maxWidth: "130px" },
    { src: "/ruru.svg", alt: "Ruru snack", maxWidth: "133px" },
  ];
  return (
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
    <div id="dedikasi" className="bg-[#10316B] h-[1000px] w-full pt-[123px] z-10 relative flex flex-col justify-center items-center dedikasi">
      <img src="/Vector 67.svg" alt="vector" className="max-w-[391px] absolute -top-[90px] right-0" />
      <img src="/Group 245.svg" alt="pixel" className="max-w-[672px] absolute top-[280px] -z-10" />
      <img src="/Vector 50.svg" alt="vector" className="max-w-[326px] absolute bottom-0 left-0 -z-10" />
      <div className="flex flex-col justify-center items-center gap-8 max-w-[619px]">
        <h1 className="text-8xl/[54px] text-white">Dedikasi Kami</h1>
        <p className="text-base/[24px] text-white text-center">Di bawah naungan Kabinet Devoria, HIMARPL UPI berkomitmen untuk menjadi wadah terbaik dalam mengembangkan potensi akademik, profesional, dan sosial seluruh anggota.</p>
      </div>

      <div className="flex flex-row items-center gap-10 justify-between max-w-[1280px] mt-[103px] z-10">
        {dedikasiItems.map((item, index) => (
          <CardDedication key={index} index={index} img={item.img} bgColor={item.bgColor} title={item.title} />
        ))}
      </div>
      <div className="bg-[#ffe867] w-[160px] h-14 flex justify-center items-center py-4 px-6 rounded-[64px] mt-20 z-10">
        <Link to="/dedikasi" className="text-[#806D00] text-[20px]/[24px] ">
          <h4 className="bg-transparent w-[160px] h-14 rounded-[64px] py-4 px-6">Lihat Semua</h4>
        </Link>
      </div>
    </div>
  );
}

function Berita() {
  return (
    <div id="berita" className="bg-white py-20 flex flex-col items-center justify-between">
      <div className="relative flex flex-row items-center justify-between max-w-[1220px] gap-20">
        <div className="bg-[url('/berita.jpg')] w-[576px] h-[612px] bg-center bg-cover rounded-3xl" />

        <div className="flex flex-col justify-center max-w-[580px]">
          <img src="/Group 241.svg" alt="pixel" className="absolute max-w-[72px] top-0 right-0" />
          <img src="/Group 252.svg" alt="pixel" className="absolute max-w-[303px] bottom-0 right-0" />
          <p className="text-[64px]/[72px] font-semibold">Akses Berita Aktual RPL di Sini.</p>
          <p className="mt-6 mb-10">
            <b> Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025.
          </p>
          <div className="border w-[206px] h-14 flex justify-center items-center py-4 px-6 rounded-[64px] ">
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
    <div id="visiMisi" className="bg-[#10316B] w-full h-[1080px] pt-[68px] gap-[68px] flex flex-col justify-center items-center relative z-0">
      <img src="/Group 251.svg" alt="pixel" className="max-w-[300px] absolute -top-7 right-0 -z-20" />
      <img src="/Group 250.svg" alt="pixel" className="max-w-[259px] absolute bottom-0 left-0 -z-20" />

      <div className="flex flex-col rounded-3xl max-w-[1220px] gap-4 h-[300px] border-8 border-[#FF4B4B]">
        <div className="flex flex-row items-center justify-between bg-[#FF4B4B] gap-96 rounded-b-3xl max-w-full px-6 py-4">
          <h4 className="text-white text-[40px]">Visi</h4>

          <div className="flex flex-row items-center justify-between gap-4">
            <div className="w-6 h-6 bg-[#B50000] rounded-full"></div>
            <div className="w-6 h-6 bg-[#B50000] rounded-full"></div>
            <div className="w-6 h-6 bg-[#B50000] rounded-full"></div>
          </div>
        </div>

        <p className="text-white text-[24px]/[40px] mx-6">
          Menjadi himpunan mahasiswa yang aktif, inovatif, dan kolaboratif dalam mengembangkan potensi akademik, profesional, dan sosial mahasiswa Rekayasa Perangkat Lunak UPI, serta berkontribusi positif bagi masyarakat dan dunia industri.
        </p>
      </div>
      <div className="flex flex-col rounded-3xl max-w-[1220px] gap-4 max-h-[460px] pb-5 border-8 border-[#5573FF]">
        <div className="flex flex-row items-center justify-between bg-[#5573FF] gap-96 rounded-b-3xl max-w-full px-6 py-4">
          <h4 className="text-white text-[40px]">Misi</h4>

          <div className="flex flex-row items-center justify-between gap-4">
            <div className="w-6 h-6 bg-[#001DA7] rounded-full"></div>
            <div className="w-6 h-6 bg-[#001DA7] rounded-full"></div>
            <div className="w-6 h-6 bg-[#001DA7] rounded-full"></div>
          </div>
        </div>

        <ul>
          <li>
            <p className="text-white text-[24px]/[40px] mx-6">• Menyelenggarakan program kerja yang mendukung pengembangan kompetensi teknis dan soft skills mahasiswa.</p>
          </li>
          <li>
            <p className="text-white text-[24px]/[40px] mx-6">• Membangun budaya organisasi yang profesional, adaptif, dan berintegritas.</p>
          </li>
          <li>
            <p className="text-white text-[24px]/[40px] mx-6">• Menjadi wadah aspirasi dan advokasi bagi mahasiswa Rekayasa Perangkat Lunak.</p>
          </li>
          <li>
            <p className="text-white text-[24px]/[40px] mx-6">• Meningkatkan kolaborasi dengan berbagai pihak, termasuk institusi pendidikan, industri, dan masyarakat.</p>
          </li>
          <li>
            <p className="text-white text-[24px]/[40px] mx-6">• Melaksanakan kegiatan sosial dan pengabdian kepada masyarakat yang relevan dengan bidang keilmuan.</p>
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
