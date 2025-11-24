import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AhliContext } from '../context/AhliContext';
import eduIconSrc from '/public/assets/backpack.svg';
import expIconSrc from '/public/assets/clock.svg';
import locIconSrc from '/public/assets/geo-alt.svg';

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-center text-slate-600">
      <div className="w-6 mr-3 text-slate-400">{icon}</div>
      <span className="font-semibold mr-2">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

function AhliDetailPage() {
  const { id } = useParams();
  const { ahliList } = useContext(AhliContext);

  const ahli = ahliList.find(a => a.id === parseInt(id));

  if (!ahli) {
    return (
      <div className="text-center py-40">
        <h1 className="text-2xl font-bold">Ahli tidak ditemukan.</h1>
        <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Kembali ke Home</Link>
      </div>
    );
  }

  const eduIcon = <img src={eduIconSrc} alt="Pendidikan" />;
  const expIcon = <img src={expIconSrc} alt="Pengalaman" />;
  const locIcon = <img src={locIconSrc} alt="Lokasi" />;

  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <img 
              src={ahli.imgSrc} 
              alt={`Foto ${ahli.name}`} 
              className="w-full h-auto rounded-lg shadow-lg aspect-square object-cover"
            />
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-blue-600 font-semibold">{ahli.specialty}</p>
              <h1 className="text-4xl font-bold text-slate-800 mt-1">{ahli.name}</h1>
            </div>
            
            <p className="text-slate-600 leading-relaxed">{ahli.desc}</p>

            <div className="border-t border-slate-200 pt-6 space-y-4">
              <InfoItem icon={eduIcon} label="Pendidikan" value={ahli.education} />
              <InfoItem icon={expIcon} label="Pengalaman" value={ahli.experience} />
              <InfoItem icon={locIcon} label="Lokasi Praktik" value={ahli.location} />
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button className="w-full sm:w-auto flex-grow py-3 px-8 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                Jadwalkan Konsultasi
              </button>
              <Link to="/" className="w-full sm:w-auto flex-grow text-center py-3 px-8 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition-colors">
                Kembali ke Home
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AhliDetailPage;
