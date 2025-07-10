import { Link } from 'react-router-dom';

function Footer(props){
    return (
    <footer className="footer">
        <div className="img-copyright-container">
            <img src="./public/vite.svg" alt="Logo Aplikasi"></img>
        <h1>© Copyright 2025, Nosik.</h1>
        </div>
        <div className="footer-nav">
        <h3>Navigasi Cepat</h3>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/obat">Obat</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        </div>

        <div className="quick-information">
            <h2>Hubungi Kami</h2>
            <p>Telepon: (0321) 123-456</p>
            <p>Email: kontak@nosik.com</p>
        </div>
    </footer>
    )
}

export default Footer