import React, { useState } from 'react';
import mapPinIcon from '../assets/map.svg';
import mailIcon from '../assets/mail.svg';
import phoneIcon from '../assets/phone.svg';

function InfoCard({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg h-12 w-12 flex items-center justify-center p-2">
        <img src={icon} alt={`${title} icon`} className="h-full w-full inverted-colors:" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    alert('Pesan Anda telah terkirim! Halaman akan dimuat ulang.');
    window.location.reload();
  };


  return (
    <div className="pt-20 bg-slate-50">
      <header className="text-center py-24 px-8 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Hubungi Kami</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">Punya pertanyaan atau masukan? Kami siap mendengar dari Anda. Hubungi kami melalui detail di bawah atau isi formulir kontak.</p>
      </header>

      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <InfoCard icon={mapPinIcon} title="Alamat Kantor">
              Gambir, Kecamatan Gambir, Kota Jakarta Pusat, <br />
              Daerah Khusus Ibukota Jakarta 10110
            </InfoCard>
            <InfoCard icon={mailIcon} title="Email">
              Hubungi tim kami untuk pertanyaan umum. <br />
              <a href="mailto:kontak@nosik.com" className="text-blue-600 hover:underline">kontak@nosik.com</a>
            </InfoCard>
            <InfoCard icon={phoneIcon} title="Telepon">
              Layanan pelanggan kami siap membantu. <br />
              (0321) 123-456
            </InfoCard>

            <div className="h-80 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666426309227!2d106.8249641759144!3d-6.17539239380938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                <textarea name="message" id="message" rows="5" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus-border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
