import { useQuery } from '@tanstack/react-query';
import { fetchTopNews, searchNews } from '../services/newsService';
import NewsCard from '../component/NewsCard.tsx';
import type { Article } from '../core/models/Article';
import { useState } from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeSearch, setActiveSearch] = useState('');

    //Chiamata API con React Query
    const { data, isLoading, isError, error } = useQuery({
        queryKey: activeSearch ? ['searchNews', activeSearch] : ['topNews'],
        queryFn: activeSearch ? () => searchNews(activeSearch) : fetchTopNews,
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveSearch(searchQuery.trim());
    };

    const handleReset = () => {
        setSearchQuery('');
        setActiveSearch('');
    };

    //Gestione dello stato di caricamento
    if (isLoading) {
        return (
            <div className="container">
                <p className={styles.loading}>Caricamento delle ultime notizie in corso...</p>
            </div>
        );
    }

    //Gestione degli errori
    if (isError) {
        return (
            <div className="container error-message">
                <h2>Si è verificato un errore</h2>
                <p>{error instanceof Error ? error.message : "Impossibile caricare i dati."}</p>
            </div>
        );
    }

    return (
        <main className="container">
            <header className={styles.header}>
                <h1 className={styles.title}>NewsWave - Ultime Notizie</h1>
                <p className={styles.subtitle}>Resta aggiornato con i fatti dal mondo in tempo reale.</p>

                /* Form di ricerca */
                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cerca una notizie per parola chiave..."
                        className={styles.searchInput}
                    />
                    <button
                        type="submit"
                        disabled={!searchQuery.trim()}
                        className={styles.searchButton}
                    >
                        Cerca
                    </button>
                    {activeSearch && (
                        <button
                            type="button"
                            onClick={handleReset}
                            className={styles.resetButton}
                        >
                            Reset
                        </button>
                    )}
                </form>

                {activeSearch && (
                    <p className={styles.searchInfo}>
                        Risultati per: "{activeSearch}"
                    </p>
                )}
            </header>


            <section className={styles.newsGrid}>
                {data?.articles.length ? (
                    data.articles.map((article: Article, index: number) => (
                        <NewsCard
                            key={`${article.url}-${index}`}
                            article={article}
                        />
                    ))
                ) : (
                    <p className={styles.noResults}>Nessuna notizia trovata al momento.</p>
                )}
            </section>
        </main>
    );
};

export default HomePage;