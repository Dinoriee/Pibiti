function Navbar(){
    return (
    <nav className="navbar">
        <div className="nav">
            <img src="./public/vite.svg" alt="Logo Aplikasi"></img>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Obat</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
        <div className="profile">
            <button className="profile-button">
                <img className="foto-profile" src="./src/assets/react.svg" alt="Foto Profile" />
                <span>Username</span>
                <img className="logo-dropdown" src="./src/assets/dropdown.svg" alt="dropdown" />
            </button>

              {/* //membuat dropdown nanti */}
            <div className="dropdown">

            </div>
        </div>
    </nav>
    )
}

export default Navbar