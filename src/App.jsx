import './style.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {

  return (
    <>
      <div className="video-container">
        <div className="overlay"></div> {/* Div khusus untuk gradient */}
        <video autoPlay loop muted playsInline className='bg-video'>
          <source src='./src/assets/loop video.mp4' type='video/mp4'/>
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
      <h1>Ditangani oleh ahli yang berkompeten</h1>
      <div className="card-container">
      <Card>
        <img src="./src/assets/person.svg" alt="" />
      </Card>
      <Card>

      </Card>
      <Card>

      </Card>
      </div>

    </div>
    </>
  )
}

export default App
