import React, { createContext, useState } from 'react';
import ahliPic from '../assets/foto-ahli.png';

export const AhliContext = createContext();

const initialAhliData = [
  { 
    id: 1, 
    name: 'Dr. Budi Hartono, Sp.JP', 
    specialty: 'Spesialis Jantung', 
    imgSrc: ahliPic,
    education: 'Fakultas Kedokteran, Universitas Indonesia',
    experience: '12 tahun di RS Jantung Harapan Kita',
    location: 'Jakarta Selatan',
    desc: 'Dr. Budi adalah seorang kardiolog ternama dengan fokus pada penanganan penyakit jantung koroner dan intervensi kardiovaskular. Beliau berdedikasi untuk memberikan perawatan terbaik bagi pasiennya.' 
  },
  { 
    id: 2, 
    name: 'Dr. Ana Puspita, S.Gz', 
    specialty: 'Ahli Gizi', 
    imgSrc: ahliPic,
    education: 'Ilmu Gizi, Institut Pertanian Bogor',
    experience: '8 tahun sebagai konsultan gizi klinis',
    location: 'Bandung',
    desc: 'Berfokus pada nutrisi anak dan penanganan masalah berat badan, Dr. Ana membantu keluarga membangun pola makan yang sehat dan seimbang untuk masa depan yang lebih baik.'
  },
  { 
    id: 3, 
    name: 'Citra Lestari, M.Psi.', 
    specialty: 'Psikolog Klinis', 
    imgSrc: ahliPic,
    education: 'Magister Psikologi, Universitas Gadjah Mada',
    experience: '10 tahun praktik di klinik kesehatan mental',
    location: 'Yogyakarta',
    desc: 'Citra Lestari menyediakan layanan konseling untuk remaja dan dewasa, dengan spesialisasi pada penanganan kecemasan, depresi, dan manajemen stres.'
  },
];

export const AhliProvider = ({ children }) => {
  const [ahliList] = useState(initialAhliData);

  return (
    <AhliContext.Provider value={{ ahliList }}>
      {children}
    </AhliContext.Provider>
  );
};