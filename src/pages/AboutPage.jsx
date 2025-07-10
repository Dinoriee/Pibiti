import React from 'react';
import Card from '../components/Card'; 

import trustIcon from '../assets/smile.svg';
import accessibilityIcon from '../assets/access.svg';
import innovationIcon from '../assets/innovation.svg';

const teamData = [
  { id: 1, name: 'Dino', desc: 'Founder & CEO', btnDesc: 'Lihat Profil', imgSrc: 'https://placehold.co/400x300/3498db/ffffff?text=Dino' },
  { id: 2, name: 'Budi Santoso', desc: 'Lead Developer', btnDesc: 'Lihat Profil', imgSrc: 'https://placehold.co/400x300/2ecc71/ffffff?text=Budi' },
  { id: 3, name: 'Citra Lestari', desc: 'UI/UX Designer', btnDesc: 'Lihat Profil', imgSrc: 'https://placehold.co/400x300/9b59b6/ffffff?text=Citra' },
];

function TeamCard({ id, name, desc, btnDesc, imgSrc }) {
  return (
    <div className="w-full max-w-[300px] h-[25rem] rounded-lg shadow-xl bg-[rgb(33,142,250)] flex flex-col overflow-hidden">
      <div 
        className="h-[180px] w-full bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(33,142,250,1)), url('${imgSrc}')` }}
      ></div>
      <div className="flex flex-col items-center text-center p-6 flex-grow">
        <h1 className='m-[0.2em] font-semibold text-white'>{name}</h1>
        <p className="text-white opacity-90 text-sm flex-grow">{desc}</p>
        <div className="mt-auto">
          <a href="#" className="inline-block py-2 px-6 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200 transition-colors">{btnDesc}</a>
        </div>    
      </div>
    </div>
  );
}


export default function AboutPage() {
  return (
    <div className="pt-20 bg-slate-50">
      
      <header 
        className="text-white text-center py-32 px-8"
        style={{ background: "linear-gradient(to right, rgba(80, 120, 220, 0.9), rgba(20, 150, 210, 0.9)), url('https://placehold.co/1920x600/333/fff?text=Nosik') no-repeat center center/cover" }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Tentang Nosik</h1>
          <p className="text-lg md:text-xl opacity-90">Misi kami adalah menyediakan akses informasi kesehatan yang mudah, akurat, dan tepercaya untuk seluruh masyarakat Indonesia.</p>
        </div>
      </header>

      <section className="py-24 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Perjalanan Kami</h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Dari sebuah ide sederhana menjadi platform kesehatan yang dapat diandalkan.</p>
        
        <div className="history-timeline relative max-w-4xl my-8 mx-auto">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="timeline-item group">
            <div className="timeline-content">
              <span className="timeline-year">2023</span>
              <h3 className="font-bold text-xl mb-2">Awal Mula Ide</h3>
              <p className="text-gray-600">Nosik lahir dari keprihatinan akan maraknya misinformasi kesehatan. Berawal dari proyek kecil, kami bercita-cita membangun platform yang dapat diandalkan.</p>
            </div>
          </div>
           <div className="timeline-item group">
            <div className="timeline-content">
              <span className="timeline-year">2024</span>
              <h3 className="font-bold text-xl mb-2">Peluncuran Versi Beta</h3>
              <p className="text-gray-600">Setelah berbulan-bulan pengembangan, kami meluncurkan versi beta pertama kepada sekelompok kecil pengguna untuk mendapatkan masukan berharga.</p>
            </div>
          </div>
           <div className="timeline-item group">
            <div className="timeline-content">
              <span className="timeline-year">2025</span>
              <h3 className="font-bold text-xl mb-2">Peluncuran Publik</h3>
              <p className="text-gray-600">Nosik resmi diluncurkan untuk publik, dengan fitur pencarian obat dan direktori ahli yang siap melayani seluruh Indonesia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 text-center bg-slate-50">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Tim di Balik Nosik</h2>
        <p className="max-w-3xl mx-auto mb-16 text-gray-600 text-lg">Kami adalah sekelompok profesional yang bersemangat dalam dunia teknologi dan kesehatan.</p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {teamData.map(member => (
            <TeamCard 
              key={member.id}
              id={member.id}
              name={member.name}
              desc={member.desc}
              btnDesc={member.btnDesc}
              imgSrc={member.imgSrc}
            />
          ))}
        </div>
      </section>

      <section className="py-24 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold mb-16 text-gray-800">Nilai-Nilai Kami</h2>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl my-8 mx-auto text-left">
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 p-3">
              <img src={trustIcon} alt="Kepercayaan Icon" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-800">Kepercayaan</h3>
            <p className="text-gray-600">Menyajikan informasi yang akurat dan diverifikasi oleh para ahli untuk membangun kepercayaan pengguna.</p>
          </div>
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 p-3">
              <img src={accessibilityIcon} alt="Aksesibilitas Icon" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-800">Aksesibilitas</h3>
            <p className="text-gray-600">Memastikan platform kami mudah diakses dan digunakan oleh siapa saja, di mana saja, tanpa terkecuali.</p>
          </div>
          <div className="p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mb-6 p-3">
              <img src={innovationIcon} alt="Inovasi Icon" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-800">Inovasi</h3>
            <p className="text-gray-600">Terus mengembangkan teknologi untuk memberikan solusi kesehatan terbaik bagi masa depan.</p>
          </div>
        </div>
      </section>
    </div>
  );
}