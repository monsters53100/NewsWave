import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

/**
 * Componente Navbar riutilizzabile.
 * Fornisce i link principali per la navigazione della SPA.
 */
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link to="/" className={styles.link}>NewsWave 🌊</Link>
            </div>

            <ul className={styles.navLinks}>
                <li>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to="/login" className={styles.link}>Login / Newsletter</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;