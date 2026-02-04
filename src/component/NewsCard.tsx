import { useNavigate, Link } from 'react-router-dom';
import type { Article } from '../core/models/Article';
import styles from './NewsCard.module.css';

interface NewsCardProps {
    article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/news/${encodeURIComponent(article.title)}`);
    };

    return (
        <article className={styles.card} onClick={handleClick}>
            {article.urlToImage && (
                <img
                    src={article.urlToImage}
                    alt={article.title}
                    className={styles.image}
                />
            )}
            <h3 className={styles.title}>
                {article.title}
            </h3>
            <p className={styles.description}>
                {article.description}
            </p>
            <div className={styles.meta}>
                <span>{article.source.name}</span>
                {article.author && <span> • {article.author}</span>}
            </div>
            <Link
                to={`/news/${encodeURIComponent(article.title)}`}
                className={styles.readMore}
                onClick={(e) => e.stopPropagation()}
            >
                Leggi di più
            </Link>
        </article>
    );
};

export default NewsCard;
