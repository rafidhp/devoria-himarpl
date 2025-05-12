import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react/dist/iconify.js";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4m5tap6", "template_0neykyf", form.current, "wGQqOPYlmdmNFzPvV").then(
      (result) => {
        alert("Pesan berhasil dikirim!");
        form.current.reset();
      },
      (error) => {
        alert("Gagal mengirim pesan.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <form ref={form} onSubmit={sendEmail} className="lg:mx-[110px] lg:my-[68px] h-fit relative">
        <img src="/devoria.png" alt="Devoria" className="absolute top-0 right-0 w-[362px] opacity-[12%] -z-10" />
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-2xl w-fit" onClick={() => window.history.back()}>
            <Icon icon="mingcute:left-line" className="w-10 h-10" />
            <p className="font-medium text-2xl">Kembali</p>
          </div>
          <div className="max-w-[1000px]">
            <p className="font-semibold text-8xl ">Sampaikan Aspirasi dan Pesan Anda</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label>
              <p className="font-bold text-2xl">Masukkan Email Anda</p>
            </label>
            <input type="email" className="border-1 border-[#979797] rounded-2xl px-6 py-4 lg:w-[800px]" name="from_email" placeholder="example@gmail.com" required />
          </div>

          <div className="flex flex-col gap-4">
            <label>
              <p className="font-bold text-2xl">Masukkan Nama Anda</p>
            </label>
            <input type="text" className="border-1 border-[#979797] rounded-2xl px-6 py-4 lg:w-[800px]" placeholder="Giorno Giovanna" name="from_name" required />
          </div>

          <div className="flex flex-row items-end justify-between">
            <div className="flex flex-col gap-4">
              <label>
                <p className="font-bold text-2xl">Ketik Pesan Disini</p>
              </label>
              <textarea name="message" className="border-1 border-[#979797] rounded-2xl px-6 py-4 lg:w-[800px] lg:max-h-[250px]" placeholder="Ketik aspirasimu disini" required />
            </div>

            <button type="submit" className="hover:cursor-pointer  px-6 py-2 rounded-2xl bg-black text-white">
              Kirim
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
