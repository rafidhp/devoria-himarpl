import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4m5tap6',
      'template_0neykyf',
      form.current,
      'wGQqOPYlmdmNFzPvV',
    ).then(
      (result) => {
        alert('Pesan berhasil dikirim!');
        form.current.reset();
      },
      (error) => {
        alert('Gagal mengirim pesan.');
        console.error(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nama Anda</label>
      <input type="text" className='border-1 border-black' name="from_name" required />
      <br /><br />

      <label>Email Anda</label>
      <input type="email" className='border-1 border-black' name="from_email" required />
      <br /><br />

      <label>Pesan</label>
      <textarea name="message" className='border-1 border-black' required />
      <br /><br />

      <button type="submit" className='border-1 border-black hover:cursor-pointer ms-2 px-6 py-2 rounded-2xl bg-gray-700 text-white'>Kirim Pesan</button>
    </form>
  );
};

export default EmailForm;
