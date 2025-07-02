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
            <li><a href="#">Home</a></li>
            <li><a href="#">Obat</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
        </div>

        <div className="quick-information">
            <h2>Hubungi Kami</h2>
            <p>Telepon: +1-234-567</p>
            <p>Email: myBussiness@gmail.com</p>
        </div>
    </footer>
    )
}

export default Footer