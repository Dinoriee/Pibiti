import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
            <img src="/vite.svg" alt="Logo Aplikasi"></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/obat">Obat</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <div className="profile">
             <div className={isOpen ? 'profile active' : 'profile'} ref={dropdownRef}>
            <button className="profile-button" onClick={toggleDropdown}>
                <img className="foto-profile" src="/assets/react.svg" alt="Foto Profile" />
                <span>Username</span>
                <img className="logo-dropdown" src="/assets/dropdown.svg" alt="dropdown" />
            </button>

            <div className="dropdown">
                <Link to="/profile">Profile</Link>
                <Link to="/">Log Out</Link>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar