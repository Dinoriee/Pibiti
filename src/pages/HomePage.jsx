import React, { useContext } from 'react';
import '../style.css';
import Card from '../components/Card';
import ReviewForm from '../components/ReviewForm';
import ReviewCarousel from '../components/ReviewCarousel';
import { AhliContext } from '../context/AhliContext';
import { Link } from 'react-router-dom';

function HomePage() {
  const { ahliList } = useContext(AhliContext);

  return (
    <>
      <div className="video-container">
        <div className="overlay"></div>
        <video autoPlay loop muted playsInline className='bg-video'>
          <source src='./src/assets/loop video.mp4' type='video/mp4' />
        </video>
      </div>

      <div className="tampilan-awal" style={{fontFamily: "Montserrat",}}>
        <h1>Selamat Datang di Aplikasi Nosik</h1>
        <Link to='/about'>Know More About Us</Link>
      </div>
        <div className="second-page">
          <div className="second-title">
            <h1>Ditangani oleh ahli yang berkompeten</h1>
          </div>
          <div className="flex items-center justify-evenly font-light">
            {ahliList.map(ahli => (
              <Card 
                key={ahli.id}
                id={ahli.id} 
                name={ahli.name} 
                desc={ahli.specialty}
                btnDesc='Lihat Detail'
              />
            ))}
          </div>
        <h2>Telah Melayani Lebih Dari 5000 Pasien Dari Seluruh Indonesia</h2>
      </div>
        <section className="review-container">
          <div className="review-title">
            <h2>Apa Kata Mereka?</h2>
          </div>
          <ReviewCarousel />
          <hr className="pembatas-review" />
          <h3>Bagikan Pengalaman Anda</h3>
          <ReviewForm />
        </section>
    </>
  )
}

export default HomePage
