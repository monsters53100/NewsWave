import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTopNews } from '../services/newsService';
import type { Article } from '../core/models/Article';
import styles from './DetailPage.module.css';

const DetailPage = () => {
    // 1. Recupero del parametro dinamico dall'URL (Requisito Avanzato)
    const { title } = useParams<{ title: string }>();
    const navigate = useNavigate();

    // 2. Recupero dati (In un'app reale useresti un ID, qui cerchiamo per titolo nei dati in cache)
    const { data, isLoading } = useQuery({
        queryKey: ['topNews'],
        queryFn: fetchTopNews,
        staleTime: 1000 * 60 * 5, // Mantiene i dati validi per 5 minuti
    });

    // Trova l'articolo specifico basandosi sul titolo nell'URL
    const article = data?.articles.find((a: Article) => a.title === title);

    if (isLoading) return <div className="container"><p className={styles.loading}>Caricamento...</p></div>;

    // 3. Gestione pagina non trovata (Se l'articolo non esiste)
    if (!article) {
        return (
            <div className="container">
                <div className={styles.notFound}>
                    <h2>Articolo non trovato</h2>
                    <button onClick={() => navigate('/')} className={styles.backButton}>
                        Torna alla Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="container">
            <button onClick={() => navigate(-1)} className={styles.backButton}>
                ← Torna indietro
            </button>

            <article className={styles.article}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{article.title}</h1>
                    <p className={styles.meta}>
                        Di <strong>{article.author || 'Autore sconosciuto'}</strong> |
                        Fonte: {article.source.name} |
                        Data: {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                </header>

                {article.urlToImage && (
                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        className={styles.image}
                    />
                )}

                <div className={styles.content}>
                    <p>{article.description}</p>
                    <hr />
                    <p>{article.content || "Contenuto non disponibile per la versione gratuita."}</p>

                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.readMoreBtn}
                    >
                        Leggi l'articolo originale su {article.source.name}
                    </a>
                </div>
            </article>
        </main>
    );
};

export default DetailPage;