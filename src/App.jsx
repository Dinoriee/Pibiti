import './style.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="video-container">
        <div className="overlay"></div>
        <video autoPlay loop muted playsInline className='bg-video'>
          <source src='./src/assets/loop video.mp4' type='video/mp4' />
        </video>
      </div>
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>

      <div className="tampilan-awal">
        <h1>Selamat Datang di Aplikasi Nosik</h1>
        <a href="#">Know More About Us</a>
      </div>
      <div className="second-page">
        <div className="second-title">
          <h1>Ditangani oleh ahli yang berkompeten</h1>
        </div>
        
        <div className="card-container">
          <Card name='Nama Ahli -1-' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, unde.'
          btnDesc='About Ahli -1-'></Card>
          <Card name='Nama Ahli -2-' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, unde.'
          btnDesc='About Ahli -2-'></Card>
          <Card name='Nama Ahli -3-' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, unde.'
          btnDesc='About Ahli -3-'></Card>
        </div>
        

        <h2>Telah Melayani Lebih Dari 5000 Pasien di Seluruh Indonesia!</h2>
      </div>

      <Footer />
    </>
  )
}

export default App
