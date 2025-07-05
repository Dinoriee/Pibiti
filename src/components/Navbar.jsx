import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
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
             <div className={isOpen ? 'profile active' : 'profile'} ref={dropdownRef}>
            <button className="profile-button" onClick={toggleDropdown}>
                <img className="foto-profile" src="./src/assets/react.svg" alt="Foto Profile" />
                <span>Username</span>
                <img className="logo-dropdown" src="./src/assets/dropdown.svg" alt="dropdown" />
            </button>

            <div className="dropdown">
                <a href="#">Profile</a>
                <a href="#">Setting</a>
                <a href="#">Log Out</a>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar