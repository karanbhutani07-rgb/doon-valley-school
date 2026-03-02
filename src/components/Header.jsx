import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img src="/assets/images/logo.png" alt="Doon Valley School Logo" className="nav-logo" />
                </Link>
                <button
                    className="mobile-menu-btn"
                    aria-label="Open menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
                    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
                </nav>
            </div>
        </header>
    );
}
