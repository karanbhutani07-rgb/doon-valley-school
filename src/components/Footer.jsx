import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <footer>
            <div className="footer-content">
                <Link to="/" className="logo">
                    <img src="/assets/images/logo.png" alt="Doon Valley School Logo" className="footer-logo" />
                </Link>
                {isHome && <p>Janta Colony, Jyoti Nagar, Alwar, Rajasthan 301001</p>}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Doon Valley Secondary School</p>
                    <p>Built by Cryotonics Ltd.</p>
                </div>
            </div>
        </footer>
    );
}
