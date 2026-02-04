import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Pagina non trovata</h2>
            <p className={styles.description}>
                La pagina che stai cercando non esiste o è stata spostata.
            </p>
            <button onClick={() => navigate('/')} className={styles.button}>
                Torna alla Home
            </button>
        </div>
    );
};

export default NotFoundPage;
